// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";
import { addUser, confirmLogin } from "../model/user.model.js";
export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).json({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

// export const loginUser = (req, res) => {
//   let status = confirmLogin(req.body);
//   if (status) {
//     //  Write your code here to create the JWT token and store it in a cookie named "jwtToken"
//     const jwtToken = jwt.sign(
//       {
//         userID: status.id,
//         email: status.email,
//       },
//       'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
//       {
//         expiresIn: '1h',
//       }
//     );

//     res
//     .status(200).cookie("jwtToken", jwtToken, { maxAge: 1 * 24 * 60 * 60 * 1000 }).json({
//       status: "success", msg: "login successful",});
//   } else {
//     res.status(400).json({ status: "failure", msg: "invalid user details" });
//   }
// };
export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  if (status.id != null && status.email != null) {
    //  Write your code here to create the JWT token and store it in a cookie named "jwtToken"
    console.log(status);
    const jwtToken = jwt.sign(
      { userID: status.id, email: status.email },
      "YTOHjWHrzrJAPB1dvzD3ZHEjfMFabkaRvPJRf",
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .cookie("jwtToken", jwtToken, { maxAge: 1 * 24 * 60 * 60 * 1000 })
      .json({ status: "success", msg: "login successful" });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
