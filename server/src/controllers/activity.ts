const mongoose = require('mongoose');
import { Request, Response } from "express";

// get all
export const getActivities = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// create one -> body
export const createActivity = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// delete one -> query id
export const deleteActivity = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// delete all
export const deleteActivities = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// body name, query id
export const updateName = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// body expense, query id
export const updateExpense = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}
