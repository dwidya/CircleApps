import { Request, Response } from "express";
import UserService from "../services/UserService";

export default new class UserController {
    create(req: Request, res: Response) {
        UserService.create(req, res)
    }
    
    findById(req: Request, res: Response) {
        UserService.findById(req, res)
    }

    findByAuth(req: Request, res: Response) {
        UserService.findByAuth(req, res)
    }
    
    find(req: Request, res: Response) {
        UserService.find(req, res);
    }

    update(req: Request, res: Response) {
        UserService.update(req, res);
    }

    updateByAuth(req: Request, res: Response) {
        UserService.updateByAuth(req, res);
    }

    delete(req: Request, res: Response) {
        UserService.delete(req, res);
    }
}