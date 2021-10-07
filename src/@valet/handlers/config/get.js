import { db } from '@valet/database';
import * as response from '@valet/utils/http';

export default function get(req, res) {
  try {
    const config = db('config').find({});
    return response.ok(config)(res);
  } catch (err) {
    return response.internalError()(res);
  }
}