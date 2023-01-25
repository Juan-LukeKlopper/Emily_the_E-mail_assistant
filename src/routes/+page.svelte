<script lang="ts">
    let text = "";
	let generating = false;
	let apiOutput = "";

	async function callGenerateEndpoint(text: string) {
  	generating = true;

  
  	console.log("Calling OpenAI...")
  	const response = await fetch('/api/generate', {
    	method: 'POST',
    	headers: {
      	'Content-Type': 'application/json',
    	},
    	body: JSON.stringify({
	  	text: text,
		})
  	});
	
  	const output = await response.json();
	if (output['error']){
		console.log(output['error'])
	} else {
		apiOutput = output['output']['text']
	}
	
  	generating = false;
}
</script>

<svelte:head>
	<title>Emily the E-mail assistant</title>
	<meta name="E-mail assistant landing page" content="Emily, An AI powered E-mail response assistant" />
</svelte:head>

<h1 class="text-6xl dark:text-white text-gray-900 text-center my-5">Welcome to Emily</h1>
<p class="text-xl dark:text-white text-gray-900 text-center my-5">The AI powered E-mail response assistant</p>

<div class="flex ">
	<div class="bg-white dark:bg-black w-1/5"/>
	<textarea placeholder="Please enter the email you want to respond to" cols="30" rows="10" bind:value={text} class="w-3/5 h-6/12 text-center border-double border-2 border-black dark:border-white bg-mediumlightGray" />
	<div class="bg-white dark:bg-black w-1/5 "/>
</div>
<div class="flex my-4 justify-center justify-items-center">
	<div class="bg-white dark:bg-black w-3/5"/>
	<button on:click|preventDefault={callGenerateEndpoint(text)} class="w-1/5 h-6/12 text-center border-double border-2 border-black dark:border-white inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mr-8">Submit</button>
	<div class="bg-white dark:bg-black w-1/5 "/>
</div>
<div class="flex my-20 justify-center justify-items-center flex-col">
	{#if generating}
		<p class="text-xl dark:text-white text-gray-900 text-center my-5">The Responce is Generating...</p>
	{:else if apiOutput}
		<h2 class="text-3xl dark:text-white text-gray-900 text-center my-5">Output</h2>
		<p class="text-xl dark:text-white text-gray-900 text-center my-5">{apiOutput}</p>
	{:else}
		<p class="opacity-0" />
	{/if}
</div>
