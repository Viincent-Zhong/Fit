import { Router } from "express";
import defaultRoute from "./default";
import defaultRoute2 from "./default2"

const router = Router();

router.use('/', defaultRoute);
router.use('/second', defaultRoute2);


export default router;