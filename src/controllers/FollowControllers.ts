import { Request, Response } from "express";
import FollowServices from "../services/FollowServices";

export default new class FollowController {
    follow(req: Request, res: Response) {
        FollowServices.follow(req, res);
    }
    getFollowing(req: Request, res: Response) {
        FollowServices.getFollowing(req, res)
    }

    getFollowers(req: Request, res: Response) {
        FollowServices.getFollowers(req, res);
    }
}