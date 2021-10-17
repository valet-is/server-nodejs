import fs from 'fs';

export function ensureDirSync(path) {
  if (fs.existsSync(path)) return;
  fs.mkdirSync(path);
}

export function isFileExists(fp) {
  try {
    fs.lstatSync(fp);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    }
    throw err;
  }
  return true;
}

export function readDirSync(path) {
  try {
    return fs.readdirSync(path);
  } catch (err) {
    return [];
  }
}
