import * as response from '@valet/utils/http';
import { db } from '@valet/database';

export default function getSingle(req, res) {
  const { name } = req.params;
  const resourceSingle = db('resources').findOne({ name });
  response.ok(resourceSingle)(res);
}
