import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from '../src/pages/SignUp';
import Results from './components/Results';
import Pages from './pages/Pages';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {



  return (
    
    <ApolloProvider client={client}>
      
     <Pages />
     
   </ApolloProvider>
    
  );
}

export default App;
