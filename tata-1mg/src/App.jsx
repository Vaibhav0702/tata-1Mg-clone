

import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import Zandu from "./components/Produxts/Zandu/Zandu";
import Product from "./components/Singleproduct/Product";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/zandu" element={<Zandu />}></Route>
        <Route path="/zandu/:id" element={<Product />}></Route>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
