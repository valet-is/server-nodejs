import logger from '@core/utils/logger';

import * as jsondb from './jsondb';
import * as mongodb from './mongodb';

export default async function connect() {
  const dbConn = process.env.DB_CONNECTION;
  logger.log(`Starting database ${dbConn}..`);

  switch (dbConn) {
    case 'jsondb':
      if (!jsondb.get()) {
        await jsondb.connect();
        logger.log(`+ ${dbConn} connected.`);
        break;
      }
      logger.log(`+ ${dbConn} started.`);
      break;
    case 'mongodb':
      if (!mongodb.get()) {
        await mongodb.connect();
        logger.log(`+ ${dbConn} connected.`);
        break;
      }
      logger.log(`+ ${dbConn} started.`);
      break;
    default:
      throw new Error(`Error: Unsupported database connection: ${dbConn}`);
  }
}
