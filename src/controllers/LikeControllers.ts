import { Request, Response } from "express";
import LikeServices from "../services/LikeServices";

export default new class LikeControllers {
    create(req: Request, res: Response) {
        LikeServices.create(req, res)
    }
    
    findById(req: Request, res: Response) {
        LikeServices.findById(req, res)
    }
    
    find(req: Request, res: Response) {
        LikeServices.find(req, res);
    }

    delete(req: Request, res: Response) {
        LikeServices.delete(req, res);
    }
}