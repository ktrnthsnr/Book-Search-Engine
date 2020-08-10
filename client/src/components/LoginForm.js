// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

// new -- adding JSON Web Token (JWT) authentication from the utils auth.js
import Auth from '../utils/auth';

// removed -- replaced by Apollo LOGIN_USER mutation
  // import { loginUser } from '../utils/API';


// new -- importing hooks to connect mutations from utils
    import { useMutation } from '@apollo/react-hooks';
    import { LOGIN_USER } from '../utils/mutations';
    // import { ADD_USER } from '../utils/mutations';
    // import { SAVE_BOOK } from '../utils/mutations';
    

const LoginForm = () => {
  
  // new -- added login user mutation
  const [login, { error }] = useMutation(LOGIN_USER);    //---- check

  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // submit the form, with async 
  const handleFormSubmit = async (event) => {
    event.preventDefault();


    // removed if statement --
        // // check if form has everything (as per react-bootstrap docs)
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //   event.preventDefault();
        //   event.stopPropagation();
        // }

    try {

            // new -- replace the loginUser() functionality imported from the API file with the LOGIN_USER mutation functionality.
              // execute loginUser mutation and pass in variable data from the form state object as variables for the mutation function
            const { data } = await login (
                {
                  variables: { ...userFormData  }
                }
            );


    // removed --    previous syntax     
          //   const response = await loginUser(userFormData);

          //   if (!response.ok) {
          //     throw new Error('something went wrong!');
          //   }

          //   const { token, user } = await response.json();
          //   console.log(user);

    // new -- added for JSON web token (JWT)
    Auth.login(data.login.token);

      // console.log(data);

      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
