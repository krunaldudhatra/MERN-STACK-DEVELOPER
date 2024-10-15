// Please don't change the pre-written code
// Import the necessary modules here
import {getAllUsers} from "../features/user/model/user.model.js"
import{fetchAllProducts} from "../features/product/model/product.model.js"
const basicAuthMiddleware = (req,res,next) => {
  // Write your code here
  const authHeader = req.headers["authorization"];

    if(!authHeader){
        return res.status(401).json({"success": "false",
          "message": "No authorization details found",
        });
    }
    console.log(authHeader);
    // 2. Extract credentials. [Basic qwertyusdfghj345678cvdfgh]
    const base64Credentials = authHeader.replace('Basic ','');
    console.log(base64Credentials);
    // 3. decode crdentials.

    const decodedCreds = Buffer.from(base64Credentials, 'base64').toString('utf8')
    console.log(decodedCreds); // [username:password]
    const creds = decodedCreds.split(':');

    const user = getAllUsers().find(u=> u.email==creds[0] && u.password==creds[1]);
    if(user){
      res.status(200).json({"success" : "true",
        "products": fetchAllProducts(),
      });
        next();
    }
    else{
        return res.status(401).json({"success": "false",
          "message": "authorization failed",
        });
    }

};

export default basicAuthMiddleware;
