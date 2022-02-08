import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { postMethodOnly } from "../middleware/postMethodOnly";
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

interface MyNextApiRequest extends NextApiRequest{
    body: {
        email: string;
        username: string;
        firstname: string;
        lastname: string;
        password: string;
        confirmPassword: string;
    }
}

const AddUser = postMethodOnly(async (req: MyNextApiRequest, res: NextApiResponse) => {
    const {email, username, firstname, lastname, password, confirmPassword} = req.body;

    // could probably change this to findUnique
    const userExists = await prisma.user.findFirst({
        where : {
            OR: [{ 
                email: email, 
                username: username 
            }]
        }
    });

    if (userExists) {
        res.status(200).json({ message: "email or username already exists!" });
        return;
    }

    hash(password, 12, async (err, hash) => {
        // Store hash in your password DB.
        const addUser = await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: hash,
                firstname: firstname,
                lastname: lastname,
                giftList: {
                    create: {
                        itemName: [],
                        price: [],
                        color: [],
                        size: [],
                        storeLink: [],
                        notes: [],
                    }
                }
            }
        });
    });

    res.status(200).json({ message: "added user" })
})

export default AddUser;