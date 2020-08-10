// existing
import React from 'react';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// -- new: React Router gives the single-page the multi-page feel
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// new -- create the Apollo Provider, to import statements
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import NoMatch from './pages/NoMatch';

// -- testing
  // import Header from './components/Header';
  // import Footer from './components/Footer';
  // import Home from './pages/Home';

// new -- instruct Apollo instance to retrieve token every time a GraphQL request is make
  const client = new ApolloClient({
    request: operation => {
      const token = localStorage.getItem('id_token');

      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      });
    },
    uri: '/graphql'
  });


// -- new: prod server
    // const client = new ApolloClient({
    //   uri: '/graphql'
    // });

// -- new: development server, establish connection to backend server's graphql's endpoint
    // const client = new ApolloClient({
    //   uri: 'http://localhost:3001/graphql'
    // });

  
// -- new App function for adding React routes to these pages, adding Apollo Provider elements
function App() {
  return (
    <ApolloProvider client={client}>
          <Router>
            <>
              <Navbar />
              <Switch>
                <Route exact path='/' component={SearchBooks} />
                <Route exact path='/saved' component={SavedBooks} />
                {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
                <Route component={NoMatch} />
              </Switch>
            </>
          </Router>
    </ApolloProvider>
  );
}

  // -- original
      // function App() {
      //   return (
          // <Router>
          //   <>
          //     <Navbar />
          //     <Switch>
          //       <Route exact path='/' component={SearchBooks} />
          //       <Route exact path='/saved' component={SavedBooks} />
          //       <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          //     </Switch>
          //   </>
          // </Router>
      //   );
      // }

 

export default App;
