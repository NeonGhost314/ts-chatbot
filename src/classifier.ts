import  { Intent, Message, ClassifiedMessage } from "./types.js";

import { intentPatterns } from "./intentPatterns.js";

/**
 * Normalise the inputMessage of the User to a string without symbol in lowercase
 * @param text the text to normalize
 * @returns nomalized string
 */
function normalize(text: string): string {
    return text.toLowerCase().trim().replace(/[^\w\s]/g, "");
}


function scoreIntent(normalizedText:string , intentPatterns: string[]) : number{
    const enum Confidence {
        Good = 0.80,
        Medium = 0.40,
        None= 0
    }
    let score = Confidence.None;   

    for (const pattern of intentPatterns) {
        if (normalizedText.includes(pattern)){
            score += Confidence.Good;
        }
        else {
            const words = normalizedText.split(" ");
            for (const word of words){
                if(normalizedText.includes(word)){
                    score+= Confidence.Medium;
                }
            }
        }
    }
    return Math.min(score, 1);

}