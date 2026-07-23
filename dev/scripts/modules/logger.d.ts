interface LoggingFn {
    (message: string): void;
}

interface LoggingAction {
    (): void;
}

interface LogBlock<TReturn> {
    (): TReturn;
}

interface LoggingBlockFn {
    <TReturn>(fn: LogBlock<TReturn>): TReturn;
}

interface Logger {
    log: LoggingFn;
    warn: LoggingFn;
    error: LoggingFn;
    indent: LoggingAction;
    dedent: LoggingAction;
    block: LoggingBlockFn;
}

interface LoggerOptions {
    console: Console;
}

declare function loggerFrom(options: LoggerOptions): Logger;
export { loggerFrom };