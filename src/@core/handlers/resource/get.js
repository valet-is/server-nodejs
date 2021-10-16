import { db } from '@core/database';
import * as response from '@core/utils/http';

export default function get(req, res) {
  const resources = db('resources').find({});
  response.ok(resources)(res);
}
