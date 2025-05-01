import { HfInference } from '@huggingface/inference';

const apiKey = import.meta.env.VITE_MY_API_KEY;

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
could make with some or all of those ingredients. You don't need to use every ingredient they mention 
in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many 
extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

const hf = new HfInference(apiKey);

// Optional: Only needed if you're manually using fetch, not required for `hf.chatCompletion`
const headers = {
    "Authorization": `Bearer ${apiKey}`
};

export async function getRecipeMistral(ingredientArr) {
    const ingredientsString = ingredientArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error("❌ API Error:", err.message);
        throw err; // re-throw for upstream handling if needed
    }
}

