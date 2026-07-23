"use strict";

import { rm } from "fs/promises";
import { loggerFrom } from "./modules/logger.js";
import { join } from "path";
import { projectRoot } from "./modules/paths.js";
import { spawn } from "child_process";
import { command } from "./modules/commands.js";

async function isDockerRunning() {
  try {
    await command('docker info');
    return true;
  } catch (error) {
    return false;
  }
}

async function main() {
  const logger = loggerFrom({ console });

  if (!await isDockerRunning()) {
    logger.error("Cannot run setup script with docker engine not started. Please start docker desktop.");
    return;
  }

  logger.log("Installing dependencies...");
  await logger.block(async () => {
    await command("pnpm", ["install"]);
  });

  logger.log("Regenerating development JWT_SECRET key...");
  await logger.block(async () => {
    await import("./keygen.js");
  });

  logger.log("Syncing local postgresql database...");
  await logger.block(async () => {
    await command("pnpm", ["dev:docker", "-d"]); // start docker detached.
    await command("pnpm", ["exec", "prisma", "migrate", "deploy"]);
  });

  logger.log("Generating prisma types.");
  await logger.block(async () => {
    await command("pnpm", ["exec", "prisma", "generate"]);
  })

  logger.log("Finished setup!");
  logger.log("What is next?");
  logger.log("Run each of these commands on separate terminals:\n\tpnpm dev:docker\n\tpnpm db:sync")
}

main();