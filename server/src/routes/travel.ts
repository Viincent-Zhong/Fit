import { Router } from "express";
import { getTravels, createTravel, deleteTravel, updateName, updateStartDate, updateEndDate, updateExpense, updateBudget } from "../controllers/travel";
// /travel

const router = Router();

// get all
router.get('/', getTravels);

// create one
router.post('/', createTravel);

// delete one -> query id
router.delete('/', deleteTravel);

// body name, query id
router.patch('/name', updateName);

// body startDate, query id
router.patch('/sdate', updateStartDate);

// body endDate, query id
router.patch('/edate', updateEndDate);

// body totalExpense, query id
router.patch('/expense', updateExpense);

// body budget, query id
router.patch('/budget', updateBudget);

export default router;