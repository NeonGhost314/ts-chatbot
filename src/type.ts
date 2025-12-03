// Enums are simply to define a set of named constant
export enum MessageType {
    Text = "text",
    Event = "event",
}

// Interface defines the structure or the shape of an object (propoerties, methods)
export interface User {
    id: string;
    name: string;
}

export interface Message {
    id: string;
    text: string;
    user: User;
    timestamp: Date;
    type: MessageType;
}

export enum Intent {
    Greeting = "greeting",
    Goodbye = "goodbye",
    Help = "help",
    Query = "query",
    Unknown = "unknown",
    Smalltalk = "smalltalk",
    Weather = "weather",
    Search = "search"
}

// Generic function accepts a type <T> parametter allowing it to work with different data types
export interface ClassifiedMessage<T extends Intent = Intent> extends Message {
    intent: T;
    confidence: number;
    entities?: Record<string , any>;
}

export type ConversationState = Map<
    string,
    { lastIntent: Intent; context: Record<string, any> }
>;
