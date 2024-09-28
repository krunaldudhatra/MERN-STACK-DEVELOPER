// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";
// const jwtAuth = (req, res, next) => {
//   // Write your code here
//   const token = req.cookies.jwtToken;
//   console.log(token);
//     // 2. if no token, return the error.
//     if(!token){
//         return res.status(401).json( { "success": false, "msg": {
//             "name": "JsonWebTokenError",
//             "message": "jwt must be provided",
//             } });
//     }
//     // 3. check if token is valid.
//     try{
//         jwt.verify(
//             token,
//             "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz"
//         );
//     } catch(err){
//         // 4. return error.
//         return res.status(401).json({success: false,
//               msg: err,
//      } );
//     }

//     // 5. call next middleware.
//     next();
// };

// export default jwtAuth;
const jwtAuth = (req, res, next) => {
  // Write your code here
  console.log(req.cookies.jwtToken);
  // read the token from the request headers
  const token = req.cookies.jwtToken;
  console.log("token: " + token);
  // if the token is invalid then return error
  if (!token) {
    return res
      .status(401)
      .json({
        success: false,
        msg: { name: "JsonWebTokenError", message: "jwt must be provided" },
      });
  }
  // check if the token is valid
  try {
    jwt.verify(token, "YTOHjWHrzrJAPB1dvzD3ZHEjfMFabkaRvPJRf");
  } catch (err) {
    // return error
    return res.status(401).json({ success: false, msg: err });
  }
  // call the next middleware
  next();
};

export default jwtAuth;
