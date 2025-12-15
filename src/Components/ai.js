
import { GoogleGenAI } from "@google/genai";
const apiKey = import.meta.env.VITE_MY_API_KEY;

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
could make with some or all of those ingredients. You don't need to use every ingredient they mention 
in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many 
extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

const genAi = new GoogleGenAI({apiKey});

// Optional: Only needed if you're manually using fetch, not required for `hf.chatCompletion`
// const headers = {
//     "Authorization": `Bearer ${apiKey}`
// };

export async function getRecipeMistral(ingredientArr) {
    const ingredientsString = ingredientArr.join(", ");
    try {
        const response = await genAi.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                { role: "user", parts: [{ text:`I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` }]},
            ],
            config: {
                systemInstruction: SYSTEM_PROMPT, // SYSTEM_PROMPT must be a string
                maxOutputTokens: 2024,
            },
        });
        return response.text || "No recipe found.";
    } catch (err) {
    //    alert("Error fetching recipe: " + err.message);
       return(err.message) // re-throw for upstream handling if neede
    }
}
// await getRecipeMistral()
