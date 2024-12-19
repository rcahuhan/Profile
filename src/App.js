import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
