import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import xssClean from 'xss-clean';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';

import * as statusHandler from '@core/handlers/status';
import * as bootstrapHandler from '@core/handlers/bootstrap';
// import coreRoutes from '@core/routes';

// import authRoutes from '@app/routes/auth';
// import apiRoutes from '@app/routes/api';
// import oauthRoutes from '@app/routes/oauth';

import logger from '@app/utils/logger';

import { port } from 'config';

const app = express();

app.use('/assets', express.static('./assets'));

app.use(cors());
app.use(helmet());
app.use(xssClean());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // 100 requests per IP
});
app.use(limiter);
app.use(mongoSanitize());
app.use(hpp());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/status', statusHandler.get);
app.post('/bootstrap', bootstrapHandler.post);

// app.use('/auth', authRoutes);
// app.use('/core', coreRoutes);
// app.use('/api', apiRoutes);
// app.use('/oauth', oauthRoutes);

app.use(express.static(path.join(path.join(__dirname, '..', 'public'))));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  logger.log(`Server is running on ${port}`);
});
