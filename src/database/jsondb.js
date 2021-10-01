import JsonDB from '@valet-is/jsondb';

let _db = null;
let _collection = null;

export async function connect() {
  _db = new JsonDB();
  return _db;
}

export function get() {
  return _db;
}

const getCollections = () => {
  if (!_db) _db = new JsonDB();
  _collection = _db.collections;
  return _collection;
};

export function db(coll = null) {
  if (!coll) return getCollections();
  return getCollections()[coll];
}

export function createCollection(collName) {
  if (!_db) _db = new JsonDB();
  _db.createCollection(collName);
}
