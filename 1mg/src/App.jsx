// import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/navbar";
import { Footer } from "./component/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />

      <Footer />
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />}></Route> */}
      {/* <Route path="/homedetail" element={<Homedetail />}></Route> */}
      {/* <Route path="/login" element={<Login />}></Route> */}
      {/* <Route path="/signup" element={<Signup />}></Route> */}
      {/* <Route path="/about" element={<About />}></Route> */}
      {/* <Route path="/cart" element={<Cart />} /> */}
      {/* <Route path="/productsdetails" element={<Productdetails />} /> */}
      {/* <Route path="/contactus" element={<Contactus />} /> */}
      {/* <Route path="/checkout" element={<Checkout />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
