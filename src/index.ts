import { AppDataSource } from "./data-source";  
import * as express from 'express';
import * as cors from 'cors';
import router from "./routes";
import Cloudinary from "./utils/Cloudinary";

AppDataSource.initialize()
    .then(async () => {
        const app = express();
        const PORT = 3000;

        const options: cors.CorsOptions = {
            allowedHeaders: ["X-Requested-With", "Content-Type", "Authorization"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,POST,PATCH,DELETE",
            origin: "*",
            preflightContinue: false,
        };

        app.use(express.json());
        app.use(cors(options));
        app.use("/api/v1", router);
        Cloudinary.upload();
       
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        })
    })
    .catch(error => console.log(error))