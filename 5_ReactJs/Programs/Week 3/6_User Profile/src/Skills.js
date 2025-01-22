// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.import React from "react";

function Skill({ skills }) {
    return (
      <div>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Skill;
  