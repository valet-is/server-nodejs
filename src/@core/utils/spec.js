/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { specPath } from 'config';

let spec = null;

export const load = () => {
  spec = require(specPath);
  return spec;
};

export const getStatus = () => {
  if (!spec) load();

  return {
    ...(spec.api || {}),
    status: 'active',
  };
};
