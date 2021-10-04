import { db } from '@core/database';
import * as response from '@core/utils/http';

export default function getByType(req, res) {
  const { type } = req.params;
  try {
    const config = db('config').find({ type });
    const toResponse = (config && config[0]) || {};
    response.ok(toResponse)(res);
  } catch (err) {
    response.internalError()(res);
  }
}