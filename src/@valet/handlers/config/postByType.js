import bcrypt from 'bcrypt';

import { db } from '@valet/database';
import * as response from '@valet/utils/http';

import { salt } from 'config';

export default function postByType(req, res) {
  try {
    const { type } = req.params;
    let configCreated = null;

    // @type app
    if (type === 'app') {
      const {
        config: { appName, appDesc, baseUrl, database },
        admin: { screenName, userName, email, password },
      } = req.body;

      // config
      const admin = {
        screenName,
        userName,
        email,
      };
      const config = { type, appName, appDesc, baseUrl, database, admin };
      configCreated = db('config').insert(config);

      // user
      const user = {
        screenName,
        userName,
        email,
        password: bcrypt.hashSync(password, salt),
        role: 0,
        status: 1,
      };
      db('users').insert(user);
      return response.ok(configCreated)(res);
    }

    return response.notFound()(res);
  } catch (err) {
    return response.internalError()(res);
  }
}
