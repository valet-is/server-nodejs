import EventEmitter from 'events';
import template from 'lodash/template';

import messages from '../data/messages.json';

import logger from './logger';

const eventEmitter = new EventEmitter();
export default eventEmitter;

export const log = (evt, args) => {
  const compiled = template(messages[evt] || evt);
  const message = compiled(args);
  logger.log(message);
  // eventEmitter.emit(evt);
};

export const error = (evt, args) => {
  const compiled = template(messages[evt] || evt);
  const message = compiled(args);
  logger.error(message);
  // eventEmitter.emit(evt);
};
