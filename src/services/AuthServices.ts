import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import {  Request, Response } from 'express';
import { User } from '../entities/user';
import { Thread } from '../entities/thread';
import { Reply } from '../entities/reply';
import { Like  } from '../entities/like';
import { AppDataSource } from '../data-source';
import { loginSchema, registerSchema } from '../utils/validator/Auth';
import { Repository } from 'typeorm';

export default new class AuthServices {
    private readonly AuthRepository: Repository<User> =
        AppDataSource.getRepository(User);

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
            console.log(data.password);

            const { error, value } = loginSchema.validate(data);

            const isCheckedEmail = await this.AuthRepository.findOne({
                where: { username: value.username },
                select: [
                    "id",
                    "full_name",
                    "email",
                    "username",
                    "password",
                    "profile_description",
                    "profile_picture",
                    "createdAt",
                    "follower",
                    "following",
                ],
            });
     
            if (!isCheckedEmail) {
                return res.status(404).json({ error: "User not found" });
            }

            const isCheckedPassword = await bcrypt.compare(value.password, isCheckedEmail.password);
            if (!isCheckedPassword) {
                return res.status(400).json({ error: "Wrong password" });
            }
            const user = await this.AuthRepository.create({
                id: isCheckedEmail.id,
                full_name: isCheckedEmail.full_name,
                email: isCheckedEmail.email,
                username: isCheckedEmail.username,
               
            });

            const token = await jwt.sign({ user }, "secret", { expiresIn: "1d" });
            return res.status(200).json({ token, user });
        } catch (error) {
            console.log(error);

            return res.status(500).json({ error: error.message });
        }
    }

    async register(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
        
            const hashedPassword = await bcrypt.hash(data.password, 10);
            data.password = hashedPassword

            const user = await this.AuthRepository
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(data)
            .execute()

            console.log(user)
            return res.status(201).json({ code: 200, message: "Register success", data: data });
        } catch (error) {
            return res.status(500).json({ error: "error while register" });
        }
    }

    async check(req: Request, res: Response): Promise<Response> {
        try {
            const loginSession = res.locals.loginSession;

            const user = await this.AuthRepository.findOne({
                where: { id: res.locals.user_id },
            });
            return res.status(200).json({ user: user });
        } catch (error) {
            return res.status(500).json({ error: "error while check" });
        }
    }
}