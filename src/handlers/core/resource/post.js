import { response } from '@app/utils/http';
import { db, createCollection } from '@app/database';

export default function post(req, res) {
  // TODO Validate request body
  const resource = req.body;
  const doc = db('resources').insert(resource);
  if (doc && doc.type === 'default') {
    createCollection(`_${doc.name}`);
  }
  response.ok(res, doc);
}
