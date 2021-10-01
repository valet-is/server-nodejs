#!/user/bin/env node
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import path from 'path';

import db from '@core/database';
import { isFileExists } from '@core/utils/fs';
import logger from '@core/utils/logger';

const root = path.resolve(__dirname, '../../');
const dotEnvPath = path.join(root, '.env');

const end = (err) => {
  logger.error(err);
  process.exit(1);
};

export default async function bootstrap() {
  try {
    logger.log('Starting server...');

    // Check for `.env` and load environment variables from it if it exists.
    if (!isFileExists(dotEnvPath)) {
      // throw new Error('Error: `.env` file is missing!.');
      end('Error: `.env` file is missing!.');
    }
    require('dotenv').config();

    // Ensure the database connection is up and running.
    await db();

    require('../');
  } catch (err) {
    end(err);
  }
}

bootstrap();
