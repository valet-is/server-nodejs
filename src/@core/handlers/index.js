/* eslint-disable global-require, import/no-dynamic-require  */
import path from 'path';

import { readDirSync } from '../utils/fs';

const root = path.join(__dirname, '../../');
const handlersPath = path.join(root, 'handlers');

const handlers = readDirSync(handlersPath)
  .map((fp) => fp.split('.')[0])
  .filter((fp) => fp !== 'index');

handlers.forEach((m) => {
  exports[m] = require(path.join(handlersPath, `${m}`));
});
