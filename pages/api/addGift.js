import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const AddGift = async (req, res) => {
    const {email, itemName, price, color, size, storeLink, notes} = req.body;
    const userExists = await prisma.User.findUnique({
        where: {
            email: email
        }
    })

    if (!userExists) {
        res.status(200).json({ message: "user does not exist"});
        return;
    }

    const addGift = await prisma.User.update({
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