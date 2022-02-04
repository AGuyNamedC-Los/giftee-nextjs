import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Users = async (req, res) => {
    const users = await prisma.Users.findMany({
        select: {
            firstname: true
        }
    });
    console.log(users);

    res.status(200).json({message: "hello"})
}

export default Users;

// const users = await prisma.Users.findMany({
//     where: {
//         firstname: "carlos"
//     },
//     select: {
//         giftList: true
//     }
// });