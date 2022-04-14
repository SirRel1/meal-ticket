import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Results from "../components/Results"
import Login from '../components/Login';
import Signup from '../components/Signup';
import Choice from '../components/Choice';
import Navbar from '../components/NavBar/Navbar';
import Fav from '../components/Fav';
import StripeContainer from '../components/StripeContainer';
import Cart from '../components/Cart';


function Pages() {
  
  const [holder, setHolder] = useState([])

  return (
      <Router>
          <Navbar />
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/results/:id" element={<Results />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/choice/:id" element={<Choice holder={holder}  />} />
       <Route path="/favorites" element={<Fav />} />
       <Route path="/pay" element={<StripeContainer />} />
       <Route path="/cart" element={<Cart />} />
        
    </Routes>
    </Router>
  )
}

export default Pages;