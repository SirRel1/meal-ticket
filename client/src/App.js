import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Results from './components/Results';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={<Home/>}
            />
            <Route 
              path="/signup" 
              element={<Signup/>}
            />
            <Route 
              path="/result"
              element={<Results/>}
            />
            <Route 
              path="/matchup/:id" 
              // element={}
            />
            <Route 
              path="*"
              // element={}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
