import { Router } from 'express';

import auth from '../../controllers/auth';

const router = Router();

router.post('/signup', auth.signup);

router.post('/login', auth.login);

router.post('/logout', auth.logout);

router.post('/refresh', auth.refresh);

export default router;
