import config from "./config.js";
import { ChatGoogle } from "@langchain/google";
import { ChatCohere } from "@langchain/cohere";
import { ChatMistralAI } from "@langchain/mistralai";

const geminiModel = new ChatGoogle({
    model: "gemini-flash-latest",
    apiKey: config.googleKey
})

const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: config.cohereKey
})

const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: config.mistralKey
})

export {geminiModel, cohereModel, mistralModel}