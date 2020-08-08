import React from 'react';
// -- new: React Router gives the single-page the multi-page feel
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// to do -- update react routs on these pages 
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
// existing
import Navbar from './components/Navbar';
// new -- create the Apollo Provider, to import statements
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// -- testing
  // import Header from './components/Header';
  // import Footer from './components/Footer';
  // import Home from './pages/Home';

// -- new: prod server
    const client = new ApolloClient({
      uri: '/graphql'
    });

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
                <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
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
