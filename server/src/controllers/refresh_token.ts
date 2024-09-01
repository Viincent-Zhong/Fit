const mongoose = require('mongoose');
import { Request, Response } from "express";

// body : refreshToken
export const refresh_token = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}
