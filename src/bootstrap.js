#!/user/bin/env node
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import path from 'path';

import * as db from '@core/database';
import { isFileExists } from '@core/utils/fs';
import { log, error } from '@core/utils/events';

const root = path.resolve(__dirname, '../');
const dotEnvPath = path.join(root, '.env');

const end = (err) => {
  error(err.message);
  process.exit(1);
};

export default async function bootstrap() {
  try {
    log('bootstrap:start');

    // Check for `.env` and load environment variables if exists.
    if (!isFileExists(dotEnvPath)) {
      throw new Error('bootstrap:error-env');
    }
    require('dotenv').config();

    // Ensure database connection is ready to use.
    await db.connect();
    require('.');
  } catch (err) {
    end(err);
  }
}

bootstrap();
