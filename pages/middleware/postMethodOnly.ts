import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const postMethodOnly = (fn: NextApiHandler) => async (
    req: NextApiRequest, 
    res: NextApiResponse
) => {
    if (req.method != 'POST') {
        res.redirect('/errorPages/postMethodOnly');
        return;
    }

    return await fn(req, res);
}