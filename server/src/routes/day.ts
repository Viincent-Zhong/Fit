import { Router } from "express";
import { getDays, createDay, deleteDay, deleteDayArray, deleteDays, updateDate, updateDescription, updateExpense } from "../controllers/day";

// /day

const router = Router();

// get all
router.get('/', getDays);

// create one
router.post('/', createDay);

// delete one -> query id
router.delete('/delete-one', deleteDay);

// delete array -> query [id]
router.delete('/delete-array', deleteDayArray);

// delete all
router.delete('/', deleteDays);

// body date, query id
router.patch('/date', updateDate);

// body description, query id
router.patch('/description', updateDescription);

// body expense, query id
router.patch('/expense', updateExpense);

export default router;