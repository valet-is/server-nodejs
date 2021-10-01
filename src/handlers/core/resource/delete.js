import { response } from '@core/utils/http';
import { db } from '@core/database';

export default function getSingle(req, res) {
  const { name } = req.params;
  response.ok(res, db('resources').remove({ name }));
}
