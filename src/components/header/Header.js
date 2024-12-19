import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate(); // Initialize navigate

    // Single navigation function
    const handleNavigation = (route, e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        navigate(route); // Navigate to the specified route
    };

    return (
        <header className="main-header">
            <div className="logo">Rohit Chauhan</div>
            <nav className="nav-bar">
                <ul>
                    <li><a href="#" onClick={(e) => handleNavigation('/home', e)}>Home</a></li>
                    <li><a href="#" onClick={(e) => handleNavigation('/about', e)}>About</a></li>
                    <li><a href="#" onClick={(e) => handleNavigation('/services', e)}>Services</a></li>
                    <li><a href="#" onClick={(e) => handleNavigation('/contact', e)}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
