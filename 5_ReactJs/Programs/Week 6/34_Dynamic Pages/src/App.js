// import "./styles.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { Navbar } from "./components/Navbar";
// import { Home } from "./pages/Home";
// import { List } from "./pages/List";
// import { Contact } from "./pages/Contact";

// export default function App() {
//   // add dynamic route to the list route below
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Navbar />,
//       children: [
//         { index: true, element: <Home /> },
//         { path: "/contact", element: <Contact /> },
//         {
//           path: "/list",
//           element: <List />
//         }
//       ]
//     }
//   ]);

//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { ItemDetails } from "./pages/ItemDetails";
import { Contact } from "./pages/Contact";

export default function App() {
  // Added dynamic route to handle item details
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "/list",
          
          children: [
            { index: true, element: <List /> },
            { path: ":itemId", element: <ItemDetails /> }
          ]
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

// Let me know if you want me to adjust anything or add more features! 🚀
