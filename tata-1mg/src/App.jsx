// import logo from './logo.svg';

// import './App.css';

import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import Zandu from "./components/Produxts/Zandu/Zandu"
import Product from "./components/Singleproduct/Product"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/zandu' element={<Zandu />} ></Route>
        <Route path='/zandu/:id' element={<Product/>} ></Route>
      {/* <Route path="/" element={<HomePage />}></Route> */}
      {/* <Route path="/homedetail" element={<Homedetail />}></Route> */}
      {/* <Route path="/login" element={<Login />}></Route> */}
      {/* <Route path="/signup" element={<Signup />}></Route> */}
      {/* <Route path="/about" element={<About />}></Route> */}
      {/* <Route path="/cart" element={<Cart />} /> */}
      {/* <Route path="/productsdetails" element={<Productdetails />} /> */}
      {/* <Route path="/contactus" element={<Contactus />} /> */}
      {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>

      <Footer/>


    </div>
  );
}

export default App;
