import { db } from '@core/database';
import { response } from '@core/utils/http';

export default function get(req, res) {
  const resources = db('resources').find({});
  response.ok(res, resources);
}
