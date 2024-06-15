import { Router } from 'express';
import membersRouter from './members';

const router = Router();

router.use('/members', membersRouter);

export default router;