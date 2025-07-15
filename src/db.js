import fs from 'node:fs/promises';

export async function loadWords() {
  const DB_PATH = new URL('../db.json', import.meta.url).pathname;
  const dbFile = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(dbFile).words;
}
