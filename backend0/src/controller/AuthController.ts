import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { prisma } from "../utils/prisma";

export class AuthController {

    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });

        if(!user) {
         return res.json({error: "User not found" })   
        }

        const isValuePassword = await compare(password, user.password);

        if(!isValuePassword) {
            return res.json({error: "password invalid" });
        }

        const token = sign({id: user.id}, "0800fc577294c34e0b28ad2839435945", {expiresIn: "1d"});

    const { id } = user;


    return res.json({ user: { id, email }, token });    
    }
}