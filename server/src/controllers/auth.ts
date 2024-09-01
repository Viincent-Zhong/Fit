const mongoose = require('mongoose');
import { Request, Response } from "express";

// Login
export const login = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}
