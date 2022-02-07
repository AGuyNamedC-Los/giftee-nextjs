import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import internal from "stream";
const prisma = new PrismaClient();

export interface MyNextApiRequest {
    body: {
        index: number;
        email: string;
        itemName: string;
        price: string;
        color: string;
        size: string;
        storeLink: string;
        notes: string;
    }
}

export interface GiftList {
    itemName: string[];
    price: number[];
    color: string[];
    size: string[];
    storeLink: string[];
    notes: string[];
}

const UpdateGift = async (req: MyNextApiRequest, res: NextApiResponse) => {
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

    let giftList: GiftList | null = userExists.giftList;
    giftList!.itemName[index] = itemName;
    giftList!.price[index] = parseInt(price);
    giftList!.color[index] = color;
    giftList!.size[index] = size;
    giftList!.storeLink[index] = storeLink;
    giftList!.notes[index] = notes;

    const updateGiftList = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            giftList: {
                update: {
                    itemName: giftList!.itemName,
                    price: giftList!.price,
                    color: giftList!.color,
                    size: giftList!.size,
                    storeLink: giftList!.storeLink,
                    notes: giftList!.notes
                }
            }
        }
    });

    res.status(200).json({ message: "updated gift" });
}

export default UpdateGift;