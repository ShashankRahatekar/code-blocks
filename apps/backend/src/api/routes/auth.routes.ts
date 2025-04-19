import {Router} from 'express';
import { loginUser, registerUser, getUser } from "../controllers/auth.controller";

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/hello', getUser);

export default router;