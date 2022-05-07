// import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar/navbar";
import { Footer } from "./component/Footer/Footer";
import { Routes, Route } from "react-router-dom";
// import Cara from "./component/cara";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
