import { Configuration, OpenAIApi } from 'openai';
import type { RequestHandler } from '../$types';
import { env } from '$env/dynamic/private';


const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "Please rewrite this email to be profresional, Also fix the spelling and grammer     Email:";
const basePromtSuffix = " Response: "

export const POST: RequestHandler = async (event: any) => {
    const request = await event.request.json();
    const userInput: string = request['text'];

    
    // Run first prompt
    console.log(`UserInput: ${userInput}`)

    
    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix}${userInput}\n${basePromtSuffix}`,
        temperature: 0.9,
        max_tokens: 750,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();
    console.log(`BasePromptOutput: ${basePromptOutput}`)

    return new Response(JSON.stringify({ output: basePromptOutput}), {
        headers: {
            'content-type': 'application/json',
        },
    });
};