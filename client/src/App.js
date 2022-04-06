import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Results from './components/Results';
import Footer from './components/Footer';
import Choice from './components/Choice';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {


  const [page, setPage] = useState(true);

  const [results, setResults] = useState( );

  const [searchInput, setSearchInput] = useState('');

  const [holder, setHolder] = useState();

  const [selected, setSelected] = useState(
    [
      {image: "https://th.bing.com/th/id/R.46c2726825537e028da5d4cc13a1d897?rik=vaSJxALonWee5g&pid=ImgRaw&r=0",
    title: "Chucky BBQ",
    description: "get this food becasue it won't last long"}
  ]
    );


  return (
    
    <ApolloProvider client={client}>
      <Router>
        <div>
        <Navbar setPage={setPage} setResults={setResults} setSearchInput={setSearchInput} setHolder={setHolder} searchInput={searchInput} />
          <Routes>
            <Route 
              path="/" 
              element={<Home page={page} results={results} holder={holder} setSelected={setSelected}/>}
            />
            <Route 
              path="/login" 
              element={<Login/>}
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
              path="/choice"
              element={<Choice selected={selected} />}
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
      {/* <Footer/> */}
    </ApolloProvider>
    
  );
}

export default App;
