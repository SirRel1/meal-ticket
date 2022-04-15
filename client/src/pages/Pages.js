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
import { MenuProvider } from '../utils/MenuContext';
import Checkout from './Checkout';
import ItemDetails from './ItemDetails/index.js'

function Pages() {
  
  const [holder, setHolder] = useState([])

  return (
      <Router>
          <Navbar />
          <MenuProvider >
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/results/:id" element={<Results setHolder={setHolder} />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/choice/:id" element={<Choice holder={holder}  />} />
       <Route path="/favorites" element={<Fav />} />
       <Route path="/pay" element={<StripeContainer />} />
       <Route path="/checkout" element={<Checkout />} />
       <Route path="/items/:id" element={<ItemDetails />} />
        
    </Routes>
    </MenuProvider>
    </Router>
  )
}

export default Pages;