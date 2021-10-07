import { db } from '@valet/database';
import * as response from '@valet/utils/http';

export default function del(req, res) {
  const { id } = req.params;
  const userDeleted = db('users').remove({ _id: id });
  return response.ok(userDeleted)(res);
}
