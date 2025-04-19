import { Router } from "express";
import { getAllProblems, getProblemById } from "../controllers/code.controller";

const router = Router();

router.get('/problems', getAllProblems);
router.get('/problem/:id', getProblemById);

export default router;