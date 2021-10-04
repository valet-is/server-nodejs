import { db } from '@core/database';
import { response } from '@core/utils/http';
import logger from '@core/utils/logger';
import * as customHanlders from '@core/handlers/custom';

export default function post(req, res) {
  try {
    const { resourceConfig } = req;

    if (resourceConfig.type === 'custom') {
      return customHanlders[resourceConfig.type](req, res);
    }

    const newDoc = req.body;
    const collName = `_${resourceConfig.name}`;

    const doc = db(collName).insert(newDoc);
    return response.ok(res, doc);
  } catch (err) {
    logger.error(err);
    return response.internalError(res);
  }
}
