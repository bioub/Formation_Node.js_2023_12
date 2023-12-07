import fs from 'node:fs/promises';

try {
  const buffer = await fs.readFile(new URL(import.meta.resolve('./.editorconfig')))
  await fs.writeFile(new URL(import.meta.resolve('./.editorconfig.copy')), buffer)
  console.log('Copy done');
} catch (err) {
  console.log('Copy fail', err);
  process.exit(1);
}
