/* eslint-disable global-require, import/no-dynamic-require  */
import path from 'path';

import { readDirSync } from '../utils/fs';

const root = path.join(__dirname, '../../');
const middlewaresPath = path.join(root, 'middlewares');

const middlewares = readDirSync(middlewaresPath)
  .map((fp) => fp.split('.')[0])
  .filter((fp) => fp !== 'index');

middlewares.forEach((m) => {
  exports[m] = require(path.join(middlewaresPath, `${m}`));
});
