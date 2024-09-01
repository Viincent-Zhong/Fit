import { Router } from "express";
import travelRoute from "./travel";
import dayRoute from "./day";
import activityRoute from "./activity";
import authRoute from "./auth";
import { refresh_token } from "../controllers/refresh_token";

const router = Router();

router.use('/login', authRoute);
router.use('/refresh-token', refresh_token);
router.use('/travel', travelRoute);
router.use('/day', dayRoute);
router.use('/activity', activityRoute);

export default router;