import type { SpawnOptions } from 'node:child_process';

export interface CommandResult {
  stdout: string;
  stderr: string;
  code: number;
}

/**
 * Executes a shell command using `spawn` wrapped in a Promise.
 * 
 * @param command - The executable command (e.g., 'git', 'npm', 'ls').
 * @param args - Arguments to pass to the command.
 * @param options - Additional spawn options.
 * @returns Promise resolving to stdout, stderr, and the exit code.
 */
export declare function command(
  command: string,
  args?: string[],
  options?: SpawnOptions
): Promise<CommandResult>;