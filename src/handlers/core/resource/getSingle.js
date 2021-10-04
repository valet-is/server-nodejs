import { response } from '@core/utils/http';
import { db } from '@core/database';

export default function getSingle(req, res) {
  const { name } = req.params;
  const resourceSingle = db('resources').findOne({ name });
  response.ok(res, resourceSingle);
}
