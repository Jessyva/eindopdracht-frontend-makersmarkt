import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigatiebar from "./components/navigatiebar/Navigatiebar.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import ProductOndernemer from "./pages/productOndernemers/ProductOndernemer.jsx";
import MarktOndernemer from "./pages/marktOndernemers/MarktOndernemer.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import AanmeldenPagina from "./pages/aanmelden/AanmeldenPagina.jsx";
import Footer from './components/footer/Footer';
import Style from './App.module.css';

function App () {
    return (
        <Router>
            <div className="App">
                <Navigatiebar />
                <main>
                    <Routes>
                            <Route path="/" element={<HomePage />}/>
                            <Route path="/product-ondernemer" element={<ProductOndernemer />}/>
                            <Route path="/markt-ondernemer" element={<MarktOndernemer />}/>
                            <Route path="/inloggen" element={<LoginPage />}/>
                            <Route path="/aanmelden" element={<AanmeldenPagina />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
