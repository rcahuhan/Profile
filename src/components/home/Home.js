import React from 'react';
import './Home.css'; // Optional, for styling
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate(); // Initialize navigate

    // Single navigation function
    const handleNavigation = (route, e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        navigate(route); // Navigate to the specified route
    };
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Rohit Chauhan's Website</h1>
                <p>Your one-stop destination for quality services and information.</p>
            </header>
            <section className="home-about">
                <h2>About Us</h2>
                <p>
                    We are dedicated to providing the best services tailored to meet your needs. 
                    Discover more about what we offer by exploring our website.
                </p>
            </section>
            <section className="home-services">
                <h2>Our Services</h2>
                <ul>
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>Consultation and Support</li>
                </ul>
            </section>
            <footer className="home-footer">
                <a href="#" onClick={(e) => handleNavigation('/contact', e)}>Contact us for more information or assistance.</a>
            </footer>
        </div>
    );
};

export default Home;
