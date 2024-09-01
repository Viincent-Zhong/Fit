import { Router, Request, Response } from "express";
import { getActivities, createActivity, deleteActivity, deleteActivities, updateName, updateExpense } from "../controllers/activity";
// /activity

const router = Router();

// get all
router.get('/', getActivities);

// create one
router.post('/', createActivity);

// delete one -> query id
router.delete('/delete-one', deleteActivity);

// delete all
router.delete('/', deleteActivities);

// body name, query id
router.patch('/name', updateName);

// body expense, query id
router.patch('/expense', updateExpense);

export default router;