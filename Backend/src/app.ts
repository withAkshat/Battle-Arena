import express from "express"
import runGraph from "./ai/graph.ai.js";
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res)=>{
    res.send("working fine")
})

app.post("/invoke", async (req, res)=>{


    const { input } = req.body;
    
    // change this
    const result = await runGraph(input)

//     let result = {
//   problem: 'write a code of factorial in js',
//   solution_1: 'Here are three different ways to write a factorial program in JavaScript: **Iterative (Loop)**, **Recursive**, and **using BigInt** (for large numbers).\n' +
//     '\n' +
//     '### 1. Iterative Approach (Recommended - Best Performance)\n' +
//     'This method uses a `for` loop. It is highly efficient and avoids stack overflow errors.\n' +
//     '\n' +
//     '```javascript\n' +
//     'function factorial(n) {\n' +
//     '    // Factorial is not defined for negative numbers\n' +
//     '    if (n < 0) return "Undefined (input must be non-negative)";\n' +
//     '    \n' +
//     '    let result = 1;\n' +
//     '    for (let i = 2; i <= n; i++) {\n' +
//     '        result *= i;\n' +
//     '    }\n' +
//     '    return result;\n' +
//     '}\n' +
//     '\n' +
//     '// Example usage:\n' +
//     'console.log(factorial(5));  // Output: 120 (5 * 4 * 3 * 2 * 1)\n' +
//     'console.log(factorial(0));  // Output: 1\n' +
//     '```\n' +
//     '\n' +
//     '---\n' +
//     '\n' +
//     '### 2. Recursive Approach (Classic Computer Science Way)\n' +
//     'This method uses a function that calls itself. It is elegant but can cause a "stack overflow" error for very large numbers (usually $n > 10000$).\n' +
//     '\n' +
//     '```javascript\n' +
//     'function factorialRecursive(n) {\n' +
//     '    if (n < 0) return "Undefined";\n' +
//     '    // Base case: 0! and 1! are both 1\n' +
//     '    if (n === 0 || n === 1) {\n' +
//     '        return 1;\n' +
//     '    }\n' +
//     '    // Recursive case\n' +
//     '    return n * factorialRecursive(n - 1);\n' +
//     '}\n' +
//     '\n' +
//     '// Example usage:\n' +
//     'console.log(factorialRecursive(6)); // Output: 720\n' +
//     '```\n' +
//     '\n' +
//     '---\n' +
//     '\n' +
//     '### 3. BigInt Approach (For Large Numbers)\n' +
//     'In JavaScript, standard numbers lose precision after `18!` (exceeding `Number.MAX_SAFE_INTEGER`). If you need to calculate factorials for larger numbers (like `50!` or `100!`), you must use `BigInt`.\n' +
//     '\n' +
//     '```javascript\n' +
//     'function factorialBigInt(n) {\n' +
//     '    if (n < 0) return "Undefined";\n' +
//     '    \n' +
//     "    let result = 1n; // The 'n' suffix denotes a BigInt\n" +
//     '    for (let i = 2n; i <= BigInt(n); i++) {\n' +
//     '        result *= i;\n' +
//     '    }\n' +
//     '    return result.toString(); // Convert to string to display fully\n' +
//     '}\n' +
//     '\n' +
//     '// Example usage:\n' +
//     'console.log(factorialBigInt(50)); \n' +
//     '// Output: 30414093201713378043612608166064768844377641568960512000000000000\n' +
//     '``` \n' +
//     '\n' +
//     '### Which one should you use?\n' +
//     '* Use **Iterative (Loop)** for general-purpose programming.\n' +
//     '* Use **BigInt** if you need to calculate anything higher than `18!`.\n' +
//     '* Use **Recursive** if you are practicing recursion for coding interviews.',
//   solution_2: 'Certainly! Below is a simple JavaScript function to calculate the factorial of a given number using both iterative and recursive approaches.\n' +
//     '\n' +
//     '### Iterative Approach:\n' +
//     '```javascript\n' +
//     'function factorialIterative(n) {\n' +
//     '    if (n < 0) return undefined; // Factorial is not defined for negative numbers\n' +
//     '    let result = 1;\n' +
//     '    for (let i = 1; i <= n; i++) {\n' +
//     '        result *= i;\n' +
//     '    }\n' +
//     '    return result;\n' +
//     '}\n' +
//     '\n' +
//     '// Example usage:\n' +
//     'console.log(factorialIterative(5)); // Output: 120\n' +
//     '```\n' +
//     '\n' +
//     '### Recursive Approach:\n' +
//     '```javascript\n' +
//     'function factorialRecursive(n) {\n' +
//     '    if (n < 0) return undefined; // Factorial is not defined for negative numbers\n' +
//     '    if (n === 0 || n === 1) return 1;\n' +
//     '    return n * factorialRecursive(n - 1);\n' +
//     '}\n' +
//     '\n' +
//     '// Example usage:\n' +
//     'console.log(factorialRecursive(5)); // Output: 120\n' +
//     '```\n' +
//     '\n' +
//     '### Explanation:\n' +
//     '- **Iterative Approach**: Uses a loop to multiply numbers from 1 to `n`.\n' +
//     '- **Recursive Approach**: Calls itself with `n-1` until it reaches the base case (`n === 0` or `n === 1`), then multiplies the results back up the call stack.\n' +
//     '\n' +
//     'Both functions handle the edge case where `n` is negative by returning `undefined`, as factorial is not defined for negative numbers.\n' +
//     '\n' +
//     'Choose the approach that best fits your needs!',
//   judge: {
//     solution_1_score: 10,
//     solution_2_score: 8.5,
//     solution_1_reasoning: 'Solution 1 is excellent and highly comprehensive. It provides three different approaches: Iterative, Recursive, and BigInt. Including the BigInt approach is particularly crucial for JavaScript, because standard numbers lose precision beyond 18! (exceeding Number.MAX_SAFE_INTEGER). Explaining this limitation and providing a solution for it shows deep understanding of the language. The code is clean, optimized (e.g., the iterative loop starts at 2 instead of 1), and well-explained.',
//     solution_2_reasoning: 'Solution 2 is very good and provides both the standard iterative and recursive implementations. It correctly handles negative edge cases by returning `undefined` instead of a string (which is often preferred in programming). However, it lacks the BigInt approach, which is a major real-world requirement for calculating factorials in JavaScript due to precision limits. It also starts the iterative loop at 1, which is slightly less efficient than starting at 2.'
//   }
// }

    // console.log(result);
    
    res.json({ result, message: "data sent successfully!"})
})

export default app;