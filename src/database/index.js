import logger from '@core/utils/logger';

import * as jsondb from './jsondb';
import * as mongodb from './mongodb';

export default async function connect() {
  const { DB_CONNECTION } = process.env;
  logger.log(`Starting database ${DB_CONNECTION}..`);

  switch (DB_CONNECTION) {
    case 'jsondb':
      if (!jsondb.get()) {
        await jsondb.connect();
        logger.log(`+ ${DB_CONNECTION} connected.`);
        break;
      }
      logger.log(`+ ${DB_CONNECTION} started.`);
      break;
    case 'mongodb':
      if (!mongodb.get()) {
        await mongodb.connect();
        logger.log(`+ ${DB_CONNECTION} connected.`);
        break;
      }
      logger.log(`+ ${DB_CONNECTION} started.`);
      break;
    default:
      throw new Error(
        `Error: Unsupported database connection: ${DB_CONNECTION}`
      );
  }
}
