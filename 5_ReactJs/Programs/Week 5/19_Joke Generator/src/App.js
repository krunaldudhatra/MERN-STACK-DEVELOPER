// import "./styles.css";
// // import the custom hook to use in this document
// export default function App() {
//   const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
//   // Use the custom hook here

//   // Display loading text here

//   // Display something went wrong here
  
//   return (
//     <div className="App">
//       <h1>Joke Generator</h1>
//       {/* Do not modify the below code */}
//       <h2>{data.joke}</h2>
//       <button className="btn" >New Joke</button>
//     </div>
//   );
// }
import React from 'react';
import useFetch from './useFetch';  // Import the custom hook
import './styles.css';

export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";

  // Use the custom hook to fetch the joke
  const { data, loading, error, getJoke } = useFetch(url);

  // Display loading text if loading is true
  if (loading) {
    return <div className="App"><h1>Loading...</h1></div>;
  }

  // Display error text if there is an error
  if (error) {
    return <div className="App"><h1>Something went wrong...</h1></div>;
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Display the fetched joke */}
      <h2>{data ? data.joke : 'No joke available'}</h2>
      {/* Button to fetch a new joke */}
      <button className="btn" onClick={getJoke}>New Joke</button>
    </div>
  );
}
