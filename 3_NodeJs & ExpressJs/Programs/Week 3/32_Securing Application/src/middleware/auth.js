// Please don't change the pre-written code
// Import the necessary modules here

export const auth = (req, res, next) => {
  // Write your code here
  if (req.session.isLoggedIn) {
    return next();
  } else {
    return res.render("msgPage", { message: "Login first to access secure page" });
  }
};
