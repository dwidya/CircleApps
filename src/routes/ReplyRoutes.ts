import { Router } from "express";
import ReplyControllers from "../controllers/ReplyControllers";

const ReplyRouter = Router();

ReplyRouter.get("/replies", ReplyControllers.find)
ReplyRouter.post("/reply",  ReplyControllers.create)
ReplyRouter.get("/reply/:id", ReplyControllers.findById)
ReplyRouter.delete("/reply/:id", ReplyControllers.delete)

export default ReplyRouter;