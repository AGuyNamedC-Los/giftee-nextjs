import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const AddUser = async (req, res) => {
    const {email, username, firstname, lastname} = req.body;

    const result = await prisma.User.findMany({
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

    const addUser = await prisma.User.create({
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