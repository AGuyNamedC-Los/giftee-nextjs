import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { postMethodOnly } from "../middleware/postMethodOnly";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

interface MyNextApiRequest extends NextApiRequest {
    body: {
        email: string;
        password: string;
    }
}

const Login = postMethodOnly(async (req: MyNextApiRequest, res: NextApiResponse) => {
    const {email, password} = req.body;

    const user = await prisma.user.findFirst({
        where : {
            email: email,
        }
    });

    if (!user) {
        res.status(200).json({ message: "email not found!" });
        return;
    }

    compare(password, user?.password!, async (err, result) => {
        if (!err && result) {
            res.json({message: "user exists and passwords match!"});
        } else {
            res.json({message: "correct email, wrong password"});
        }

        return;
    });
})

export default Login;