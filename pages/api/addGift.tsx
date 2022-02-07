import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export interface MyNextApiRequest extends NextApiRequest {
    body: {
        email: string;
        itemName: string;
        price: string;
        color: string;
        size: string;
        storeLink: string;
        notes: string;
    }
}

const AddGift = async (req: MyNextApiRequest, res: NextApiResponse) => {
    const {email, itemName, price, color, size, storeLink, notes} = req.body;
    const userExists = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (!userExists) {
        res.status(200).json({ message: "user does not exist"});
        return;
    }

    const addGift = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            giftList: {
                update: {
                    itemName: {push: itemName},
                    price: {push: parseInt(price)},
                    color: {push: color},
                    size: {push: size},
                    storeLink: {push: storeLink},
                    notes: {push: notes},
                }
            }
        }
    });
    
    // res.status(200).json({ message: "adding gift" })
    res.redirect(307, '/'); // currently redirects to home
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

// case when i have two awaits for prisma and doesn;t matter which goes first
// const deletePosts = prisma.post.deleteMany({
//     where: {
//       authorId: 7,
//     },
//   })
  
//   const deleteUser = prisma.user.delete({
//     where: {
//       id: 7,
//     },
//   })
  
//   const transaction = await prisma.$transaction([deletePosts, deleteUser])