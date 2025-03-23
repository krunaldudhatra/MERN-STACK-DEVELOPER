// importing the useContext hooks and color context
// import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = () => {
  //Consuming the context
  //const {color} = useContext(colorContext)

  return (
    //<p style={{ color: color }}>Color code: {color}</p>
    <colorContext.Consumer>
    {
      (value)=><p style={{ color: value.color }}>Color code: {value.color}</p>
    }
      
    </colorContext.Consumer>
  );
};

export default GrandChildComponent;
