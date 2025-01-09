import path from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);
export const PATH_DB = path.join(currentDir, '../db/db.json');
