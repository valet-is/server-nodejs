const mongoClient = require('mongodb').MongoClient;

let _db = null;
const dbName = 'valet';

export async function connect() {
  _db = await mongoClient.connect(process.env.DB_MONGO_URL);
  return true;
}

export function get() {
  return _db && _db.db(dbName);
}

export function db(coll = null) {
  if (!coll) return _db.db(dbName);
  return _db.db(dbName).collection(coll);
}

export async function createCollection(collName) {
  await _db.db.createCollection(collName);
}

export function close() {
  _db.close();
}
