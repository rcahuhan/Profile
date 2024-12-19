import React from 'react';
import './Contact.css'; // Import the CSS for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>
                I’m always open to discussing new opportunities, collaborations, or answering any queries. Feel free to reach out!
            </p>
            <div className="contact-details">
                <div className="contact-item">
                    <h3>Phone</h3>
                    <p>+91-9050876528</p>
                </div>
                <div className="contact-item">
                    <h3>Email</h3>
                    <p>rohit7chauhan7@gmail.com</p>
                </div>
                <div className="contact-item">
                    <h3>LinkedIn</h3>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/rohit-chauhan-95a132174/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Reach out on linkedin
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
