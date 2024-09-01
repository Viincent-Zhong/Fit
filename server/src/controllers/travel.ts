const mongoose = require('mongoose');
import { Request, Response } from "express";

// get all
export const getTravels = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// create one
export const createTravel = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// delete one -> query id
export const deleteTravel = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// body name, query id
export const updateName = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// body startDate, query id
export const updateStartDate = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// body endDate, query id
export const updateEndDate = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// body totalExpense, query id
export const updateExpense = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}

// body budget, query id
export const updateBudget = async (req: Request, res: Response) => {
    console.log('Receive : ', req.body);
    res.status(200).send('Good');
}