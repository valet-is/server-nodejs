import express from 'express';

import db from './database';
import { log, error } from './utils/events';
import { startServer } from './server';

const end = (err) => {
  error(err.message);
  process.exit(1);
};

export function bootstrap() {
  return async () => {
    try {
      log('bootstrap:start');

      await db().connect();
      await startServer();
    } catch (e) {
      end(e);
    }
  };
}

export const router = express.Router();
