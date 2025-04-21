import { Router } from "express";
import { getAllProblems, getProblemById } from "../controllers/code.controller";

const router = Router();

router.get('/problem', getAllProblems);
router.get('/problem/:id', getProblemById);

export default router;