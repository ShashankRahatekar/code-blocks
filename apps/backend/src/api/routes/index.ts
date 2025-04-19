import {Router} from 'express';
import authRoutes from './auth.routes';
import codeRoutes from './code.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/code', codeRoutes);

export default router;