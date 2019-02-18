import * as fs from 'file-system';
import { spawn } from 'child_process';

function spawnGPG(filePath: string): void {
  console.log(`Signing ${filePath}`);

  const options: Array<string> = ['--armor', '--batch', '--sign'];
  const childProc = spawn('gpg', [...options, filePath]);
  childProc.on('exit', code => {
    code !== 0 ? console.log(`GPG error code: ${code}`) : null;
  });
}

function signOrSkipFile(filePath: string): void {
  fs.access(`${filePath}.asc`, fs.constants.F_OK, err => {
    if (err && err.code === 'ENOENT') {
      spawnGPG(filePath);
    }
  });
}

function signFolder(folderPath: string): void {
  fs.recurse(
    folderPath,
    ['**/*.md'],
    (filePath: string, relative: string, fileName: string) => {
      if (fileName) {
        signOrSkipFile(filePath);
      }
    }
  );
}

signFolder('content/blog');
