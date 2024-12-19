// src/components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Project 1: Personal Portfolio</h3>
          <p>A responsive portfolio website built with React.js showcasing my skills and projects.</p>
          <a href="https://github.com/your-github-username/portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-item">
          <h3>Project 2: E-Commerce Website</h3>
          <p>An e-commerce website with features like product listings, shopping cart, and checkout, built using React and Node.js.</p>
          <a href="https://github.com/your-github-username/e-commerce" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-item">
          <h3>Project 3: Blog Application</h3>
          <p>A blog web app built with React and Node.js. Users can create, edit, and delete posts.</p>
          <a href="https://github.com/your-github-username/blog-app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
