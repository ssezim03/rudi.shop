import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./components/page/Product/Product";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Basket from "./components/page/Basket/Basket";
import Favorite from "./components/page/Favorite/Favorite";
import About from "./components/page/About/About";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Product/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
