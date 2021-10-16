import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import xssClean from 'xss-clean';
import apiRateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';

import { log } from './utils/events';
import { port, rateLimit } from './config';

export const startServer = async () => {
  const app = express();

  app.use('/assets', express.static('./assets'));

  app.use(cors());
  app.use(helmet());
  app.use(xssClean());

  app.use(apiRateLimit(rateLimit));
  app.use(mongoSanitize());
  app.use(hpp());

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));

  app.use(
    express.static(path.join(path.join(__dirname, '..', '..', 'public')))
  );

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
  });

  app.listen(port, () => {
    log('bootstrap:server:started', { port });
  });
};
