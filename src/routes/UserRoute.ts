import { Router } from "express";
import UserControllers from "../controllers/UserControllers";
import Authmiddlewares from "../middlewares/JwtAuth";

const UserRouter = Router();

UserRouter.post("/user", UserControllers.create);
UserRouter.get("/users", Authmiddlewares.Authentification, UserControllers.find);
UserRouter.get("/user/auth", Authmiddlewares.Authentification,  UserControllers.findByAuth);
UserRouter.get("/user/:id", Authmiddlewares.Authentification,  UserControllers.findById);
UserRouter.patch("/user/auth", Authmiddlewares.Authentification,  UserControllers.updateByAuth);
UserRouter.delete("/user/:id", UserControllers.delete);

export default UserRouter;