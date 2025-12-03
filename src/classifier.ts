import  { Intent, Message, ClassifiedMessage } from "./types.js";

import { IntentPatterns } from "./intentPatterns.js";

/**
 * Normalise the inputMessage of the User to a string without symbol in lowercase
 * @param text the text to normalize
 * @returns nomalized string
 */
function normalize(text: string): string {
    return text.toLowerCase().trim().replace(/[^\w\s]/g, "");
}

/**
 * to score how well the normalized text matches the intent patterns
 * @param normalizedText the normalized text
 * @param intent the intent to score against
 * @returns 
 */
function scoreIntent(normalizedText: string, intent: Intent): number {
    const enum Confidence {
        Good = 0.80,
        Medium = 0.40,
        None = 0
    }
    let score = Confidence.None;

    const patterns = IntentPatterns[intent];
    
    for (const pattern of patterns) {
        if (normalizedText.includes(pattern)) {
            score += Confidence.Good;
        } else {
            const words = normalizedText.split(" ");
            for (const word of words) {
                if (pattern.includes(word)) {
                    score += Confidence.Medium;
                }
            }
        }
    }
    return Math.min(score, 1);
}

/**
 * to classify the message into an intent with confidence score
 * @param message the message to classify
 * @returns the classified message with intent and confidence
 */
function classifyMessage(message: Message): ClassifiedMessage {
    const normalizedText = normalize(message.text);
    
    let bestIntent = Intent.Unknown;
    let highestScore = 0;

    // Test against all intents and find the one with highest score
    for (const intent in IntentPatterns) {
        const score = scoreIntent(normalizedText, intent as Intent);
        if (score > highestScore) {
            highestScore = score;
            bestIntent = intent as Intent;
        }
    }

    return {
        ...message,
        intent: bestIntent,
        confidence: highestScore
    };
}