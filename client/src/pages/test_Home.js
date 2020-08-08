import React from 'react';
//import the apollo hooks
import { useQuery } from '@apollo/react-hooks';
import { QUERY_BOOKS } from '../utils/queries';
import BookList from '../components/BookList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_BOOKS);
   // -- optional chaining syntax, if data exists store in the book constant, if not store in empty array
  const books = data?.books || []; 
  console.log(books);
    // test on both client & server - 
      // cd client, npm start localhost:3000; 
      // cd server, npm run watch (localhost:3001/graphql)

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BookList books={books} title="Book List" />
          )}
        </div>
      </div>
    </main>
  );
};

// const Home = () => {
//   return (
//     <main>
//       <div className='flex-row justify-space-between'>
//         <div className='col-12 mb-3'>{/* PRINT BOOK LIST */}</div>
//       </div>
//     </main>
//   );
// };

export default Home;
