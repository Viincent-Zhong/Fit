import { Router, Request, Response } from "express";
import { refresh_token } from "../controllers/refresh_token";

// /refresh_token

const router = Router();

router.get('/', refresh_token);
  
export default router;