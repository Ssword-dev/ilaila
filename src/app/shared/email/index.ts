import { Deferred } from "../recurring/types";

export interface IEmailOptions {
    to: string;
    subject: string;
    body: string;
}

export interface IEmailSender {
    send(options: IEmailOptions): Promise<void>;
}

export class EmailSender {
    static _senders: Map<string, IEmailSender | Deferred<IEmailSender>> = new Map();

    /**
     * Registers a sender or a deferred factory function for a specific key.
     */
    public static register(key: string, sender: IEmailSender | Deferred<IEmailSender>): void {
        this._senders.set(key, sender);
    }

    public static ofKey(key: string): IEmailSender {
        if (!this._senders.has(key)) {
            throw new Error("Cannot find suitable email sender for key '" + key + "'.");
        }

        const senderOrDeferred = this._senders.get(key)!;

        // If it's a deferred factory function, evaluate it and cache the instance
        if (typeof senderOrDeferred === "function") {
            const sender = senderOrDeferred();
            this._senders.set(key, sender);
            return sender;
        }

        return senderOrDeferred as IEmailSender;
    }
}