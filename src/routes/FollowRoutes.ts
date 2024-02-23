import FollowControllers from '../controllers/FollowControllers';
import * as express from "express"
import Authmiddlewares from "../middlewares/JwtAuth";

const multer = require('multer') ();

const FollowRoutes = express.Router();

FollowRoutes.post('/follow', Authmiddlewares.Authentification, multer.any(), FollowControllers.follow)
FollowRoutes.get('/following', Authmiddlewares.Authentification, multer.any(), FollowControllers.getFollowing)
FollowRoutes.get('/follower', Authmiddlewares.Authentification, multer.any(), FollowControllers.getFollowers)


export default FollowRoutes;