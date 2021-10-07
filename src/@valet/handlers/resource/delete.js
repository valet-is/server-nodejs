import * as response from '@valet/utils/http';
import { db } from '@valet/database';

export default function getSingle(req, res) {
  const { name } = req.params;
  response.ok(db('resources').remove({ name }))(res);
}
