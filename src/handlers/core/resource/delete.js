import { response } from '@app/utils/http';
import { db } from '@app/database';

export default function getSingle(req, res) {
  const { name } = req.params;
  response.ok(res, db('resources').remove({ name }));
}
