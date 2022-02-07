import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
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

const AddUser = async (req: MyNextApiRequest, res: NextApiResponse) => {
    const {email, username, firstname, lastname, password, confirmPassword} = req.body;

    // could probably change this to findUnique
    const result = await prisma.user.findMany({
        where : {
            OR: [{ 
                email: email, 
                username: username 
            }]
        }
    });

    if (result.length != 0) {
        res.status(200).json({ message: "email or username already exists!" });
        return;
    }

    const addUser = await prisma.user.create({
        data: {
            email: email,
            username: username,
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

    res.status(200).json({ message: "added user" })
}

export default AddUser;