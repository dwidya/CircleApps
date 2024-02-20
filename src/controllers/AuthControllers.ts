import { Request, Response } from "express";
import AuthServices from "../services/AuthServices";

export default new class AuthControllers {
    register(req: Request, res: Response): Promise<Response> {
        return AuthServices.register(req, res);
    }

    login(req: Request, res: Response): Promise<Response> {
        return AuthServices.login(req, res);
    }

    check(req: Request, res: Response): Promise<Response> {
        return AuthServices.check(req, res);
    }
}