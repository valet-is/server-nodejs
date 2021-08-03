#!/user/bin/env node
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import path from 'path';

import { isFileExists, ensureDirSync } from 'utils/fs';
import logger from 'utils/logger';

import userRoles from '../data/user_roles.json';
import userStatus from '../data/user_status.json';

const jsondbPath = path.join(__dirname, '..', '..', '.jsondb');

export default async function bootstrap() {
  try {
    // Check for `.env` and load environment variables from it if it exists.
    const envfilePath = path.join(__dirname, '..', '..', '.env');
    if (!isFileExists(envfilePath)) {
      throw new Error('Error: `.env` file is missing!.');
    }
    require('dotenv').config();

    // Ensure the database connection is up and running.
    const dbConn = process.env.DB_CONNECTION;
    logger.log(`Starting ${dbConn}..`);

    let db = null;
    switch (dbConn) {
      case 'jsondb':
        ensureDirSync(jsondbPath);

        db = require('database/jsondb');
        if (db.get()) {
          logger.log(`+ ${dbConn} started.`);
        } else {
          db.connect({
            initialData: [
              {
                coll: 'config',
                data: [
                  {
                    type: 'user',
                    roles: userRoles,
                    status: userStatus,
                  },
                ],
              },
              {
                coll: 'users',
                data: [],
              },
              {
                coll: 'resources',
                data: [],
              },
            ],
          });
          logger.log(`+ ${dbConn} connected.`);
        }
        break;

      case 'mongodb':
        db = require('database/mongodb');
        if (db.get()) {
          logger.log(`+ ${dbConn} started.`);
        } else {
          await db.connect();
          // user config
          const userConfig = await db
            .get()
            .collection('config')
            .findOne({ type: 'user' });
          if (!userConfig) {
            await db.get().collection('config').insertOne({
              type: 'user',
              roles: userRoles,
              status: userStatus,
            });
          }
          logger.log(`+ ${dbConn} connected.`);
        }
        break;

      default:
        throw new Error(`Error: Unsupported database connection: ${dbConn}`);
    }

    require('../index');
  } catch (err) {
    logger.log(err);
    process.exit(1);
  }
}

bootstrap();
