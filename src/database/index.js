import { log } from '@app/utils/events';

import * as jsondb from './jsondb';
import * as mongodb from './mongodb';

export async function connect() {
  const dbConn = process.env.DB_CONNECTION;
  log('database:start', { dbConn });

  switch (dbConn) {
    case 'jsondb':
      if (!jsondb.get()) {
        await jsondb.connect();
        log('database:connected', { dbConn });
        break;
      }
      log('database:started', { dbConn });
      break;
    case 'mongodb':
      if (!mongodb.get()) {
        await mongodb.connect();
        log('database:connected', { dbConn });
        break;
      }
      log('database:started', { dbConn });
      break;
    default:
      throw new Error('database:error-unsupported');
  }
}
