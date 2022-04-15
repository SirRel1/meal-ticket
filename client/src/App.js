import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
<<<<<<< HEAD
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from '../src/pages/SignUp';
import Results from './components/Results';
=======
import Pages from './pages/Pages';

>>>>>>> 990f9126bd827ae09e3aa7e878411b2662383222


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
