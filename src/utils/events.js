import EventEmitter from 'events';
import template from 'lodash/template';

import logger from '@app/utils/logger';
import messages from '@app/data/messages.json';

const eventEmitter = new EventEmitter();
export default eventEmitter;

export const log = (evt, args) => {
  const compiled = template(messages[evt] || 'Oops!');
  const message = compiled(args);
  logger.log(message);
  // eventEmitter.emit(evt);
};

export const error = (evt, args) => {
  const compiled = template(messages[evt] || 'Oops!');
  const message = compiled(args);
  logger.error(message);
  // eventEmitter.emit(evt);
};
