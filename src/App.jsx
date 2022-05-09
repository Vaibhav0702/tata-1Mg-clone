// import logo from './logo.svg';
import { Delivery } from './components/Delivery';
// import './App.css';

import { Navbar } from './components/Navbar/Navbar';

import { Routes, Route } from "react-router-dom";

import { Home } from './components/Home';
import { Footer } from './components/Footer/Footer';
import Zandu from "./components/Produxts/Zandu/Zandu"
import {Cart} from "./components/cart/Cart";
import {Payment} from "./components/payment/Payment"

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Zandu /> */}
      <Routes>

        <Route path='/home' element={<Home/>} ></Route>
        <Route path="/cart" element = {<Cart/>}></Route>
  <Route path="/payment" element = {<Payment/>}></Route>
  <Route path="/delivery" element = {<Delivery/>}></Route>


      </Routes>
{/* 
      <Footer/> */}


    </div>
  );
}

export default App;
