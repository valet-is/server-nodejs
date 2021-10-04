import { db } from '@app/database';
import { response } from '@app/utils/http';
import * as customHanlders from '@app/handlers/custom';

export default function del(req, res) {
  const { resourceConfig } = req;

  if (resourceConfig.type === 'custom') {
    return customHanlders[resourceConfig.type](req, res);
  }

  const { id: _id } = req.params;
  const collName = `_${resourceConfig.name}`;

  const success = db(collName).remove({ _id });
  if (!success) return response.internalError(res);
  return response.ok(res);
}
