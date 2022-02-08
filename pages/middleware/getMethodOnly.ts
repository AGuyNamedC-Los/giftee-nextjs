import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const getMethodOnly = (fn: NextApiHandler) => async (
    req: NextApiRequest, 
    res: NextApiResponse
) => {
    if (req.method != 'GET') {
        res.redirect('/errorPages/getMethodOnly');
        return;
    }

    return await fn(req, res);
}

export default getMethodOnly;