<<<<<<< HEAD
// import logo from './logo.svg';

// import './App.css';

import { Navbar } from './components/Navbar';

import { Routes, Route } from "react-router-dom";

import { Home } from './components/Home';
import { Footer } from './components/Footer';
import Zandu from "./components/Produxts/Zandu/Zandu"
=======
import Product from "./components/Singleproduct/Product";
>>>>>>> ec632d61bf50826f9d76bedd8b015a6a28287700

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      <Zandu />
      <Routes>

        <Route path='/home' element={<Home/>} ></Route>

      </Routes>

      <Footer/>


=======
      
      <Product/>
    
>>>>>>> ec632d61bf50826f9d76bedd8b015a6a28287700
    </div>
  );
}

export default App;
