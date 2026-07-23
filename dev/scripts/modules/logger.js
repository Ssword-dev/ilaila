"use strict";

function loggerFrom({ console, indent = 4 }) {
  const originalConsoleLog = console.log;
  const originalConsoleWarn = console.warn;
  const originalConsoleError = console.error;

  let indentCount = 0;
  let indentString;

  if (typeof indent === "number") {
    indentString = " ".repeat(indent);
  } else {
    indentString = indent;
  }

  const logger = {};

  logger.log = (function (message) {
    originalConsoleLog(indentString.repeat(indentCount) + "\x1b[36m" + message + "\x1b[0m");
  }).bind(logger);

  logger.warn = (function (message) {
    originalConsoleWarn(indentString.repeat(indentCount) + "\x1b[33m" + message + "\x1b[0m");
  }).bind(logger);

  logger.error = (function (message) {
    originalConsoleError(indentString.repeat(indentCount) + "\x1b[31m" + message + "\x1b[0m");
  }).bind(logger);

  logger.indent = (function() { indentCount++; }).bind(logger);
  logger.dedent = (function() { indentCount = Math.max(indentCount-1, 0); }).bind(logger);

  /**
   * @template T
   * @param {() => T} fn 
   * @returns {T}
   */
  logger.block = (function(fn) {
    this.indent();
    try {
      return fn();
    }
    finally {
      this.dedent();
    }
  }).bind(logger);

  return logger;
}

export { loggerFrom }