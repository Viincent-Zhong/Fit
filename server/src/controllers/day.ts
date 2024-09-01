const mongoose = require('mongoose');
import { Request, Response } from "express";

// get all
export const getDays = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// create one
export const createDay = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// delete one -> query id
export const deleteDay = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// delete one -> query [id]
export const deleteDayArray = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// delete all
export const deleteDays = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// body date, query id
export const updateDate = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// body description, query id
export const updateDescription = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// body expense, query id
export const updateExpense = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}