/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import path from 'path';

const root = path.resolve(__dirname, '../../../');
const specPath = path.join(root, 'spec.json');

let spec = null;

export const load = () => {
  spec = require(specPath);
  return spec;
};

export const getStatus = () => {
  if (!spec) load();

  return {
    ...(spec.api || {}),
    status: 'active', // @TODO: Set realtime status here.
  };
};

export const findResource = (namespace, responseName) => {
  if (!spec) load();

  const resources = (spec.resources || {})[namespace] || {};
  return resources[responseName];
};
