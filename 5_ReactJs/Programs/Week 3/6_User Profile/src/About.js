// Create About component here to display the a small content here.
// In this component use paragraph tag (p) to display the content
import React from "react";

function About({ content }) {
  return (
    <div>
      <h2>About</h2>
      <p>{content}</p>
    </div>
  );
}

export default About;
