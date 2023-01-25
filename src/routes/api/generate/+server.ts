import { Configuration, OpenAIApi } from 'openai';
import type { RequestHandler } from '../$types';
import { env } from '$env/dynamic/private';


const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "Please respond to the following email in the tone of Lex Fridman without saying his name.      Email:";
const basePromtSuffix = " Response: "

export const POST: RequestHandler = async (event) => {
    const request = await event.request.json();
    const userInput: string = request['text'];

    
    // Run first prompt
    console.log(`API: ${basePromptPrefix}${userInput}${basePromtSuffix}`)

    
    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix}${userInput}\n${basePromtSuffix}`,
        temperature: 0.9,
        max_tokens: 500,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    return new Response(JSON.stringify({ output: basePromptOutput}), {
        headers: {
            'content-type': 'application/json',
        },
    });
};