import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1> HEllo</h1> 
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              // element={<Home />}
            />
            <Route 
              path="/matchup" 
              // element={}
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
