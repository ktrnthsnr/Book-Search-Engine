import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// -- to do: integrate these into new queryql\apollo
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// new -- create the Apollo Provider
  // these two libraries will import statements
  import { ApolloProvider } from '@apollo/react-hooks';
  import ApolloClient from 'apollo-boost';

   // new -- establish connection to backend server's graphql's endpoint
   const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql'
  });
  
 // -- new
 function App() {
  return (
    <ApolloProvider client={client}>
    {/* <Router> */}
    <Route exact path='/' component={Header} />
      <>
        <Navbar />
        <Switch>        
         <Route exact path='/' component={Home} />
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />          
        </Switch>
        <Route exact path='/' component={Footer} />
      </>
      </ApolloProvider>
    {/* </Router> */}
  );
}

  // -- apollo compare
      // function App() {
      //   return (
      //     <ApolloProvider client={client}>
      //       <div className="flex-column justify-flex-start min-100-vh">
      //         <Header />
      //         <div className="container">
      //           <Home />
      //         </div>
      //         <Footer />
      //       </div>
      //     </ApolloProvider>
      //   );
      // }

  // -- original
      // function App() {
      //   return (
      //     <Router>
      //       <>
      //         <Navbar />
      //         <Switch>
      //           <Route exact path='/' component={SearchBooks} />
      //           <Route exact path='/saved' component={SavedBooks} />
      //           <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      //         </Switch>
      //       </>
      //     </Router>
      //   );
      // }

export default App;
