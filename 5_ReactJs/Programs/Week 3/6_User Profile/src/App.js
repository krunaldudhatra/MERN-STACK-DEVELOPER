import "./styles.css";
import React, { Component } from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";

class App extends Component {
  render() {
    return (
      <>
        {/* Render Hero component with basic information */}
        <Hero 
          name="John Doe" 
          email="johndoe@example.com" 
          phone="123-456-7890" 
          address="1234 Elm Street, Springfield, USA" 
        />

        {/* Render Skills component with a list of technical skills */}
        <Skills 
          skills={[
            "JavaScript", 
            "React", 
            "Node.js", 
            "HTML", 
            "CSS", 
            "MongoDB", 
            "Express.js"
          ]}
        />

        {/* Render About component with a brief description */}
        <About 
          content="I am a software developer with a passion for creating web applications. I enjoy learning new technologies, building exciting projects, and collaborating with others to solve complex problems. In my free time, I love exploring nature, reading books, and experimenting with photography." 
        />
      </>
    );
  }
}

export default App;
