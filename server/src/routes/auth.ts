import { Router } from "express";
import { login } from "../controllers/auth";
// /login

const router = Router();

router.get('/', login);

export default router;