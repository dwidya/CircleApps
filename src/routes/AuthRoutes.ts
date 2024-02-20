import { Router } from "express";
import AuthControllers from "../controllers/AuthControllers";
import Authmiddlewares from "../middlewares/JwtAuth";

const AuthRouter = Router();
AuthRouter.post("/register", AuthControllers.register)
AuthRouter.post("/login", AuthControllers.login)
AuthRouter.get("/check", Authmiddlewares.Authentification, AuthControllers.check)


export default AuthRouter;