import { db } from '@app/database';
import { response } from '@app/utils/http';

export default function get(req, res) {
  const resources = db('resources').find({});
  response.ok(res, resources);
}
