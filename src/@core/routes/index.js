/* eslint-disable global-require, import/no-dynamic-require  */
import express from 'express';
import path from 'path';

import { readDirSync } from '../utils/fs';

const root = path.join(__dirname, '../../');
const routesPath = path.join(root, 'routes');

const namespaces = readDirSync(routesPath)
  .map((fp) => fp.split('.')[0])
  .filter((fp) => fp !== 'index');

const router = express.Router();

namespaces.forEach((ns) => {
  router.use(`/${ns}`, require(path.join(routesPath, `${ns}`)).default);
});

export default router;
