import * as express from 'express'
import ThreadController from "../controllers/ThreadController";
import Authmiddlewares from "../middlewares/JwtAuth";
import { upload } from '../middlewares/UploadFile';

const ThreadRoute = express.Router();

ThreadRoute.get("/threads", ThreadController.find)
ThreadRoute.post("/thread", Authmiddlewares.Authentification, upload("image"), ThreadController.create)
ThreadRoute.get("/thread/:id",ThreadController.findById)
ThreadRoute.patch("/thread/:id",Authmiddlewares.Authentification, upload("image"), ThreadController.update)
ThreadRoute.delete("/thread/:id", ThreadController.delete)


export default ThreadRoute;