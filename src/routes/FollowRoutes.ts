import FollowControllers from '../controllers/FollowControllers';
import * as express from "express"
import Authmiddlewares from "../middlewares/JwtAuth";

const FollowRoutes = express.Router();

FollowRoutes.post('/follow', Authmiddlewares.Authentification, FollowControllers.follow)
FollowRoutes.get('/following', Authmiddlewares.Authentification,  FollowControllers.getFollowing)
FollowRoutes.get('/follower', Authmiddlewares.Authentification, FollowControllers.getFollowers)


export default FollowRoutes;