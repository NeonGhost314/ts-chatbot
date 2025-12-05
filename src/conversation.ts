import { ClassifiedMessage, Intent, Message, ConversationState } from "./types";
import readline from "readline";
import { createInterface } from "readline";

export function getConversationState() {}

//Learning about Readline from node.js https://nodejs.org/api/readline.html
// will eventually be change for an user input in a frontend env
function conversationOpen() {
    while (true) {
        const rl = readline.createInter({
            input: process.stdin, // Readable stream to listen to
            output: process.stdout, // Writable stream to write to
            prompt: "> ", // Prompt to display (default: '> ')
        });
    }
}

console.log("ALLO");
