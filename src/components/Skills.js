// src/components/Skills.js
import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="skill-item">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="skill-item">
          <h3>Version Control</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
