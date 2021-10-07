#!/user/bin/env node
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import path from 'path';

import * as db from '@valet/database';
import { log, error } from '@valet/utils/events';
import { isFileExists } from '@valet/utils/fs';

const root = path.resolve(__dirname, '../../');
const dotEnvPath = path.join(root, '.env');
const specPath = path.join(root, 'spec.json');

const end = (err) => {
  error(err.message);
  process.exit(1);
};

export default async function bootstrap() {
  try {
    log('bootstrap:start');

    // Check for `spec.json` and stop server if not found.
    if (!isFileExists(specPath)) {
      throw new Error('bootstrap:error-spec');
    }

    // Check for `.env` and load environment variables if exists.
    if (!isFileExists(dotEnvPath)) {
      throw new Error('bootstrap:error-env');
    }
    require('dotenv').config();

    // Ensure database connection is ready to use.
    await db.connect();
    require('..');
  } catch (err) {
    end(err);
  }
}

bootstrap();
