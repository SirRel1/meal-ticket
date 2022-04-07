import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Pages from './pages/Pages';



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {



  return (
    
    <ApolloProvider client={client}>
      <div>
      
     <Pages />
     </div>
   </ApolloProvider>
    
  );
}

export default App;
