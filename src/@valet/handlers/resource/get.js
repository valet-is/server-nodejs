import { db } from '@valet/database';
import * as response from '@valet/utils/http';

export default function get(req, res) {
  const resources = db('resources').find({});
  response.ok(resources)(res);
}
