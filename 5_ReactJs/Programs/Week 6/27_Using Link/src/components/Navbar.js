// export const Navbar = () => {
//   return (
//     <div>
//       <div className="navbar">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
//           alt="logo"
//           onClick={() => window.location.replace("/")}
//         />

//         <nav>{/* create nav links here */}</nav>
//       </div>
//     </div>
//   );
// };
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Now the nav links will let you switch between pages without reloading! Let me know if you want me to style the navbar. 🚀
