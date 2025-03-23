import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "items" && <Items />}
    </>
  );
}

export default App;
