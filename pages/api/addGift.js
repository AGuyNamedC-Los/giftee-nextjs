import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const AddGift = async (req, res) => {
    const {itemName, price, color, size, storeLink, notes} = req.body;
    // const result = await prisma.User.findMany({
    //     where: {
    //         firstname: "carlos"
    //     }
    // })
    // console.log(result.length)

    // if (result.length == 0) {
    //     res.status(200).json({ message: "user does not exist"});
    //     return;
    // }
    
    res.status(200).json({ message: "adding gift" })
}

export default AddGift;

// select item within the user's gift list
// const read = await prisma.User.findMany({
//     where: {
//         firstname: "carlos"
//     },
//     select: {
//         giftList: {
//             select: {
//                 itemName: true
//             }
            
//         }
//     }
// })

// updating/adding a gift to a specific user
// for the "where" portion, you can only search up an unique field, since the prisma
// update function only updates ones person
// const giftListUpdate = await prisma.User.update({
//     where: {
//         email: "closcastillo95@gmail.com",
//     },
//     data: {
//         giftList: {
//             update: {
//                 itemName: {push: itemName}
//             }
//         }
//     }
// });