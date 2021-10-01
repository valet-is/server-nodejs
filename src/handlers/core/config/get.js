import { db } from '@core/database';
import { response } from '@core/utils/http';

export default function get(req, res) {
  try {
    const config = db('config').find({});
    response.ok(res, config);
  } catch (err) {
    response.internalError(res);
  }
}
