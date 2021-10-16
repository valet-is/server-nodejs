import express from 'express';

import * as authHandler from '@core/handlers/auth';

const router = express.Router();

router.get('/user', authHandler.user.get);
router.post('/user', authHandler.user.post);

export default router;
