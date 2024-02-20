import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';

export default new class AuthMiddlewares {
    Authentification(req: Request, res: Response, next: NextFunction) {
        try {
            const Authorization = req.headers.authorization;
            if (!Authorization || !Authorization.startsWith("Bearer")) {
                return res.status(401).json({ error: "Unauthorized" });
            }

            const token = Authorization.split(" ")[1];

            try {
                const loginSession = jwt.verify(token, "secret");
                res.locals.loginSession = loginSession;
                next()
            }   catch (error) {
                return res.status(401).json({ error: "Unauthorized" });
            }
        }   catch (error) {
            return res.status(500).json({ error: "error while authentificating" });
        }
    }
}