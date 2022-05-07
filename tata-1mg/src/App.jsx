// import logo from './logo.svg';

// import './App.css';

import { Navbar } from './components/Navbar';

import { Routes, Route } from "react-router-dom";

import { Home } from './components/Home';
import { Footer } from './components/Footer';
import Zandu from "./components/Produxts/Zandu/Zandu"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Zandu />
      <Routes>

        <Route path='/home' element={<Home/>} ></Route>

      </Routes>

      <Footer/>


    </div>
  );
}

export default App;
