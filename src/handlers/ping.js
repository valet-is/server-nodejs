import { db } from '@core/database';
import * as response from '@app/utils/http';

import { baseUrl } from 'config';

export function get(req, res) {
  try {
    let toResponse = null;
    const config = db('config').findOne({ type: 'app' });
    if (config) {
      toResponse = {
        name: config.appName,
        description: config.appDesc,
        baseUrl,
      };
    }
    response.ok(toResponse)(res);
  } catch (err) {
    response.ok(null)(res);
  }
}
