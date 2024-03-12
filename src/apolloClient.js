import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  cache: new InMemoryCache()
});

// const client = ()=>{

// const http = 'http://localhost:4001/graphql';

//   const authLink = new ApolloLink((operation, forward) => {
//     // Get the authentication token from local storage if it exists
//     const token = localStorage.getItem('token');

//     // Use the setContext method to set the HTTP headers.
//     operation.setContext({
//       headers: {
//         'Authorization': token
//       }
//     });

//     // Call the next link in the middleware chain.
//     return forward(operation);
//   });

//   return {
//     link: authLink.concat(http),
//     cache: new InMemoryCache()
//   };
// }

export default client;