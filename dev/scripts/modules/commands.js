import { spawn } from 'node:child_process';
import { projectRoot } from './paths.js';

function command(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { shell: true, cwd: projectRoot, ...options });

    let stdout = '';
    let stderr = '';

    child.stdout?.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr?.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('error', (error) => {
      reject(error);
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr, code });
      } else {
        const error = new Error(`Command "${command} ${args.join(' ')}" failed with exit code ${code}`);
        error.code = code;
        error.stdout = stdout;
        error.stderr = stderr;
        reject(error);
      }
    });
  });
}

export { command };