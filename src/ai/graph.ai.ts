import { StateSchema, type GraphNode } from "@langchain/langgraph";
import z from "zod"
import { cohereModel, geminiModel, mistralModel } from "../config/model.ai.js";

const state = new StateSchema({
    problem: z.string().default(""),
    solution_1: z.number().default(0),
    solution_2: z.number().default(0),

    judge: z.object({
        solution_1_score: z.number().default(0),
        solution_2_score: z.number().default(0),
        solution_1_reasoning: z.string().default(""),
        solution_2_reasoning: z.string().default(""),
    })
})

const solution: GraphNode<typeof state> = async (state) => {

    const [geminiRes, cohereRes] = await Promise.all([
        geminiModel.invoke(state.problem),
        cohereModel.invoke(state.problem)
    ])



    return {
        solution_1: geminiRes.text,
        solution_2: cohereRes.text
    }
}