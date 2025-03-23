// // import hook here

// export const NotFound = () => {
//   // create back funtion here

//   return (
//     <div className="not-found page">
//       <h3>Page not found.</h3>
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
//         alt="not found"
//       />

//       <button>Back to Home</button>
//     </div>
//   );
// };
// Import the useNavigate hook
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  // Create the back function
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/"); // Navigate to the Home page
  };

  return (
    <div className="not-found page">
      <h3>Page not found.</h3>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
      />

      <button onClick={goBackHome}>Back to Home</button>
    </div>
  );
};
