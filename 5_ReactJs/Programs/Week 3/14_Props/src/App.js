import Student from "./Student.js";

export default function App(){
  return(
    <>
    <Student stuname="Alexa" marks={90} />
    <Student stuname="Siri" marks={80} />
    <Student stuname="Jack" marks={50} />
    <Student  marks={10} />
    </>

  );
}
Student.defaultProps={
  stuname : "Student",
  marks:"N.A."
}