// import { Navbar } from "../components/Navbar";
// // Remove the Navbar from this component

// import { items } from "../data";

// export const List = () => {
//   return (
//     <div className="list-wrapper">
//       <Navbar />
//       <div className="list page">
//         <h3>List page</h3>
//         <div className="item-list">
//           {items.map((i) => (
//             <div className="item" key={i.id}>
//               <h3>{i.name}</h3>
//               <img src={i.image} alt={i.name} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// Remove the Navbar from this component

import { items } from "../data";

export const List = () => {
  return (
    <div className="list-wrapper">
   
      <div className="list page">
        <h3>List page</h3>
        <div className="item-list">
          {items.map((i) => (
            <div className="item" key={i.id}>
              <h3>{i.name}</h3>
              <img src={i.image} alt={i.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
