import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const UpdateGift = async (req, res) => {
    const {index, email, itemName, price, color, size, storeLink, notes} = req.body;

    const userExists = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            giftList: true
        }
    })

    if (!userExists) {
        res.status(200).json({ message: "user does not exist" });
        return;
    }

    let giftList = userExists.giftList;
    giftList.itemName[index] = itemName;
    giftList.price[index] = parseInt(price);
    giftList.color[index] = color;
    giftList.size[index] = size;
    giftList.storeLink[index] = storeLink;
    giftList.notes[index] = notes;

    const updateGiftList = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            giftList: {
                update: {
                    itemName: giftList.itemName,
                    price: giftList.price,
                    color: giftList.color,
                    size: giftList.size,
                    storeLink: giftList.storeLink,
                    notes: giftList.notes
                }
            }
        }
    });

    res.status(200).json({ message: "updated gift" });
}

export default UpdateGift;