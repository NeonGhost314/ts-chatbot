import { Intent } from "./types.js";

// Used Google Gemini to generate me a bigger Patter Table 
export const intentPatterns: Record<Intent, string[]> = {
  [Intent.Greeting]: [
    "hi", "hello", "hey", "good morning", "good evening", 
    "good afternoon", "yo", "greetings", "hi there", 
    "what's up", "howdy", "hiya", "welcome", "nice to see you"
  ],

  [Intent.Goodbye]: [
    "bye", "good night", "see you", "later", "goodbye", 
    "cya", "farewell", "have a good one", "logging off", 
    "end chat", "quit", "exit", "leave", "catch you later"
  ],

  [Intent.Help]: [
    "help", "assist", "support", "i need help", "can you help me",
    "stuck", "confused", "guide", "what do i do", "how does this work",
    "aid", "sos", "customer service", "human", "manual", "instructions"
  ],

  [Intent.Query]: [
    "what", "why", "how", "when", "who", "tell me about", 
    "explain", "describe", "details", "information on", 
    "can you answer", "define", "meaning of", "clarify"
  ],

  [Intent.Smalltalk]: [
    "how are you", "tell me a joke", "how’s it going", "who are you",
    "what is your name", "are you a bot", "are you real", 
    "you are cool", "you are smart", "bored", "entertain me",
    "what's happening", "say something"
  ],

  [Intent.Weather]: [
    "weather", "temperature", "forecast", "raining", "is it sunny",
    "is it cold", "is it hot", "umbrella", "snowing", "climate",
    "degrees", "windy", "storm", "outside conditions"
  ],

  [Intent.Search]: [
    "search", "find", "look up", "give me info", "google",
    "locate", "where can i find", "browse", "fetch", 
    "show me results for", "detect", "hunt for"
  ],

  [Intent.Gratitude]: [
    "thanks", "thank you", "thx", "appreciate it", "cheers",
    "good job", "awesome", "perfect", "great work", "helpful"
  ],

  [Intent.Affirmative]: [
    "yes", "yeah", "yep", "sure", "okay", "correct", 
    "right", "sounds good", "please", "do it", "confirm"
  ],

  [Intent.Negative]: [
    "no", "nope", "nah", "cancel", "stop", "wrong", 
    "incorrect", "don't", "never mind", "abort"
  ],

  [Intent.Unknown]: []
};
