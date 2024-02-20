import * as express from "express";
import ThreadRoute from "./ThreadRoute";
import ReplyRouter from "./ReplyRoutes";
import UserRouter from "./UserRoute";
import LikeRouter from "./LikeRoutes";
import AuthRouter from "./AuthRoutes";

import FollowRoutes from "./FollowRoutes";

const router = express.Router();

router.use("/", ThreadRoute);
router.use("/", ReplyRouter);
router.use("/", UserRouter);
router.use("/", LikeRouter);
router.use("/", FollowRoutes);
router.use("/", AuthRouter);

export default router;