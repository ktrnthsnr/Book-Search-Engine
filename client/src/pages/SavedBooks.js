// remove --  the useEffect() Hook that sets the state for UserData.
  // import React, { useState, useEffect } from 'react';   // new --  remove the useEffect hook 

import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

// new -- new import queries from utils
  // use the useQuery() Hook to execute the GET_ME query on load and save it to a variable named userData.
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';

// new -- importing hooks to connect mutations from utils
  //Use the useMutation() Hook to execute the REMOVE_BOOK mutation in the handleDeleteBook() function instead of the deleteBook() function imported f/API file.
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_BOOK } from '../utils/mutations';


const SavedBooks = () => {
  // new --  use the useQuery() Hook to execute the GET_ME query on load and save it to a variable named userData.
    const { loading, error, data} = useQuery(GET_ME);
    // const [userData, setUserData] = useState({});
    const [addHere, { data }] = useMutation(REMOVE_BOOK); // placeholder



// new -- 
const
function 

 // remove -- the useEffect() Hook that sets the state for UserData.
        // const userDataLength = Object.keys(userData).length;
        // useEffect(() => {       // new --  remove the useEffect hook
        //   const getUserData = async () => {
        //     try {
        //       const token = Auth.loggedIn() ? Auth.getToken() : null;

        //       if (!token) {
        //         return false;
        //       }

        //       const response = await getMe(token);

        //       if (!response.ok) {
        //         throw new Error('something went wrong!');
        //       }

        //       const user = await response.json();
        //       setUserData(user);
        //     } catch (err) {
        //       console.error(err);
        //     }
        //   };

    getUserData();
  }, [userDataLength]);


  // create function that accepts the book's mongo bookId value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

 
 if (!token) {
      return false;
  }

  try {
                  // remove -- Use the useMutation() Hook to execute the REMOVE_BOOK mutation in the handleDeleteBook() function instead of the deleteBook() function that's imported from API file. (Make sure you keep the removeBookId() function in place!)
                      // const response = await deleteBook(bookId, token); // todo: remove
                      // if (!response.ok) {
                      //   throw new Error('something went wrong!');
                      // }
                      // const updatedUser = await response.json();
                      // setUserData(updatedUser);

     // new -- add removeBook mutation from utils/localStorage.js                  
     const data = await removeBook (
       {
         variables: {bookId}
       }
     );

     // upon success, remove book's id from localStorage -- keep
      removeBookId(bookId);
      } catch (err) {       
        console.error(err);
      }
    };


// removed --
//  if (!userDataLength) {  

// if data isn't here yet, say so

// new --     // if (loading) return <p>Loading...</p>;
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (error) return <p>Error :(</p>;

  return data.books.map(({ booksId, title }) => {
    let input;

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
