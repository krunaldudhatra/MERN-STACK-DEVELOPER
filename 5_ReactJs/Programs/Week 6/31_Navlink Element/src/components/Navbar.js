// import { Link, Outlet } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <div>
//       <div className="navbar">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
//           alt="logo"
//           onClick={() => window.location.replace("/")}
//         />

//         <nav>
//           {/* use NavLink inplace of Link to set the style to the active links */}
//           <Link to="/">Home</Link>
//           <Link to="/list">List</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>
//       </div>
//       <Outlet />
//     </div>
//   );
// };

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles.css';

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
          <NavLink 
            to="/" 
            style={({ isActive }) => isActive ? {
              border: '2px solid #fff',
              backgroundColor: 'rgba(225, 209, 249, 0.463)',
            } : {}}
          >
            Home
          </NavLink>
          <NavLink 
            to="/list" 
            style={({ isActive }) => isActive ? {
              border: '2px solid #fff',
              backgroundColor: 'rgba(225, 209, 249, 0.463)'
            } : {}}
          >
            List
          </NavLink>
          <NavLink 
            to="/contact" 
            style={({ isActive }) => isActive ? {
              border: '2px solid #fff',
              backgroundColor: 'rgba(225, 209, 249, 0.463)',
            } : {}}
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};



// Let me know if this works for you or if you’d like any changes! 🚀