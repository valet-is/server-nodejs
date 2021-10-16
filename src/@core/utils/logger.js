/* eslint-disable prefer-spread, no-console, prefer-rest-params */
import dayjs from 'dayjs';
import chalk from 'chalk';

const info = chalk.green;
const warn = chalk.yellow;
const error = chalk.red;

const logger = {
  ...console,
};

const logPrefix = () => {
  const timestamp = dayjs().format('YYYY-MM-DD/HH:mm:ss');
  return `[${timestamp}]`;
};

logger.log = function () {
  return console.log.apply(
    console,
    [logPrefix(), ...arguments].map((arg) => info(arg))
  );
};

logger.warn = function () {
  return console.warn.apply(
    console,
    [logPrefix(), ...arguments].map((arg) => warn(arg))
  );
};

logger.error = function () {
  return console.warn.error(
    console,
    [logPrefix(), ...arguments].map((arg) => error(arg))
  );
};

export default logger;
