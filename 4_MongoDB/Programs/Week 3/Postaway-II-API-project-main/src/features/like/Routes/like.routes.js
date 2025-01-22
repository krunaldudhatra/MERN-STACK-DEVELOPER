import express from "express";
import LikeController from "../Controller/like.controller.js";
import jwtAuth from "../../../middlewares/jwt.middleware.js";

const likeRouter = express.Router();

const likesController = new LikeController();

// All the paths to controller methods.
// Get likes for a specific post or comment.
likeRouter.get("/:id", jwtAuth, (req, res, next) => {
  likesController.gettingLikes(req, res, next);
});

// Toggle like on a post or comment.
likeRouter.get("/toggle/:id", jwtAuth, (req, res, next) => {
  likesController.toggleLike(req, res, next);
});

// Exporting Router
export default likeRouter;
