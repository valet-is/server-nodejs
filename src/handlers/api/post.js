import { db } from '@core/database';
import * as response from '@app/utils/http';
import logger from '@core/utils/logger';
import * as customHanlders from '@app/handlers/custom';

export default function post(req, res) {
  try {
    const { resourceConfig } = req;

    if (resourceConfig.type === 'custom') {
      return customHanlders[resourceConfig.type](req, res);
    }

    const newDoc = req.body;
    const collName = `_${resourceConfig.name}`;

    const doc = db(collName).insert(newDoc);
    return response.ok(doc)(res);
  } catch (err) {
    logger.error(err);
    return response.internalError()(res);
  }
}
