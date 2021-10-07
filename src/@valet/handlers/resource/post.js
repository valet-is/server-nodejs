import * as response from '@valet/utils/http';
import { db, createCollection } from '@valet/database';

export default function post(req, res) {
  // TODO Validate request body
  const resource = req.body;
  const doc = db('resources').insert(resource);
  if (doc && doc.type === 'default') {
    createCollection(`_${doc.name}`);
  }
  response.ok(doc)(res);
}
