import { db } from '@app/database';
import { response } from '@app/utils/http';

export default function get(req, res) {
  try {
    const config = db('config').find({});
    response.ok(res, config);
  } catch (err) {
    response.internalError(res);
  }
}
