import "./styles.css";
import { useRef, useState, useEffect } from "react";
import useLocalStorage from "../src/useLocalStorage";

export default function App() {
  // Use the custom local storage hook here
  const [name, setName] = useLocalStorage("name", "Default Name");
  const [age, setAge] = useLocalStorage("age", 25);

  const nameInput = useRef();
  const ageInput = useRef();

  const handleClear = () => {
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    setName(nameInput.current.value);
    setAge(ageInput.current.value);

    handleClear();
  };

  return (
    // <div className="App">
    //   <div id="name">Name -{/* {name} */}</div>
    //   <div id="age">Age -{/* {age} */}</div>
    //   <form onSubmit={handleChange}>
    //     <input placeholder="Name" ref={nameInput} />
    //     <input placeholder="Age" type="number" min="1" ref={ageInput} />
    //     <button className="btn">Change</button>
    //   </form>
    // </div>
    <div className="App">
    <div id="name">Name - {name}</div>
    <div id="age">Age - {age}</div>
    <form onSubmit={handleChange}>
      <input placeholder="Name" ref={nameInput} />
      <input placeholder="Age" type="number" min="1" ref={ageInput} />
      <button className="btn">Change</button>
    </form>
  </div>
  );
}
