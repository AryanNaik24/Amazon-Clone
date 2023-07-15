
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";


const promise = loadStripe("pk_test_51NRKMZSCWZAkUGO7fnWB6sGVapet8w3TffJb2C9AdCY4y6MRBLjWcNgxVZJ21STroYKE239Igs8Kr7B6i2W9H1Hw00DSLK8bW0");


function App() {
const[{},dispatch]=useStateValue();

  useEffect(()=>{
//will only run once when app components load
  auth.onAuthStateChanged(authUser=>{
    console.log("this is auth user ==>",authUser);
    if(authUser){
      //user logged in
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }else{
      //user logged out
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
  })
  },[])
  return (
    // BEM
    <Router>
      <div className="app">
      
        <Routes>
        <Route path="/payment" element={[<Header />,<Elements stripe={promise}><Payment /></Elements>]}/>
          <Route path="/login" element={[<Login />]}/>
          <Route path="/checkout" element={[<Header />,<Checkout />]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;