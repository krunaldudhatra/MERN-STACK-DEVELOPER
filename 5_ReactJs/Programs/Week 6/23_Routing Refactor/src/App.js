// import "./styles.css";
// import { useState } from "react";

// import { Navbar } from "./components/Navbar";
// import { Home } from "./pages/Home";
// import { List } from "./pages/List";
// import { Contact } from "./pages/Contact";

// export default function App() {
//   const [page, setPage] = useState("home");
//   return (

//     <div className="App">
//       <Navbar/>
//       {/*Refactor this to use routes here */}
//       {page === "home" && <Home />}
//       {page === "list" && <List />}
//       {page === "contact" && <Contact />}
//     </div>
//   );
// }
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { List } from "./pages/List";
// import { Contact } from "./pages/Contact";
// import { Navbar } from "./components/Navbar";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/list", element: <List /> },
//   { path: "/contact", element: <Contact /> },
// ]);

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <RouterProvider router={router} />
//     </>
//   );
// }

// Now, your app will handle routing through URLs! Let me know if you’d like me to add navigation links in the Navbar. 🚀