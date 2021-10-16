/* eslint global-require: 0, import/no-dynamic-require: 0  */
import express from 'express';
import path from 'path';
import fs from 'fs';

const root = path.join(__dirname, '../../');
const routesPath = path.join(root, 'routes');

const namespaces = fs.readdirSync(routesPath).map((fp) => fp.split('.')[0]);

const router = express.Router();

namespaces.forEach((ns) => {
  router.use(`/${ns}`, require(path.join(routesPath, `${ns}`)).default);
});

export default router;
