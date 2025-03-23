// import "./styles.css";
// import { Navbar } from "./Navbar";
// import { List } from "./List";

// export default function App() {
//   return (
//     //Add the Context provider here
//     <div className="App">
//       <Navbar />
//       <List />
//     </div>
//   );
// }
import "./styles.css";
import { Navbar } from "./Navbar";
import { List } from "./List";
import { PostProvider } from "./postContext";

export default function App() {
  return (
    <PostProvider>
      <div className="App">
        <Navbar />
        <List />
      </div>
    </PostProvider>
  );
}
