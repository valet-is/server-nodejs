import { response } from '@app/utils/http';
import { db } from '@app/database';

export default function getSingle(req, res) {
  const { name } = req.params;
  const resourceSingle = db('resources').findOne({ name });
  response.ok(res, resourceSingle);
}
