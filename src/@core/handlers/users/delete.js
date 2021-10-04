import { db } from '@core/database';
import * as response from '@core/utils/http';

export default function del(req, res) {
  const { id } = req.params;
  const userDeleted = db('users').remove({ _id: id });
  return response.ok(userDeleted)(res);
}
