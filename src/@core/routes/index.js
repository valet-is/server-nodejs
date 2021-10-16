import express from 'express';

import * as coreHandlers from '@core/handlers';

import apiRoutes from '@app/routes/api';

const router = express.Router();

router.get('/status', coreHandlers.status);
router.post('/bootstrap', coreHandlers.bootstrap);

// @TODO: Add support for dynamic namespaces/routes.
// Eg. ./api.js -> /api/*, ./<namespace>.js -> /<namespace>/*
router.use('/api', apiRoutes);

export default router;
