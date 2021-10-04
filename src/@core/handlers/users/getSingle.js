import { db } from '@core/database';
import * as response from '@core/utils/http';

export default function getSingle(req, res) {
  try {
    const user = db('users').findOne({ _id: req.params.id });
    delete user.password;
    return response.ok(user)(res);
  } catch (err) {
    return response.internalError()(res);
  }
}
