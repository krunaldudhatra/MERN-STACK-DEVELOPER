// import { items } from "../data";

// export const List = () => {
//   return (
//     <div className="list page">
//       <h3>List page</h3>
//       <div className="item-list">
//         {items.map((i) => (
//           <div className="item" key={i.id}>
//             {/* add link to item details here */}
//             <h3>{i.name}</h3>
//             <img src={i.image} alt={i.name} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import { Link } from "react-router-dom";
import { items } from "../data";

export const List = () => {
  return (
    <div className="list page">
      <h3>List page</h3>
      <ul className="item-list" role="list">
        {items.map((i) => (
          <li className="item" key={i.id} role="listitem">
            <Link to={`/list/${i.id}`}>
              <h3>{i.name}</h3>
              <img src={i.image} alt={i.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
