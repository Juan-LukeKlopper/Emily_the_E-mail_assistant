<script>
    let text = "Please enter the E-mail you want to reply to";
</script>

<svelte:head>
	<title>Emily the E-mail assistant</title>
	<meta name="E-mail assistant landing page" content="Emily, An AI powered E-mail response assistant" />
</svelte:head>

<h1 class="text-6xl dark:text-white text-gray-900 text-center my-5">Welcome to Emily</h1>
<p class="text-xl dark:text-white text-gray-900 text-center my-5">The AI powered E-mail response assistant</p>

<div class="flex ">
	<div class="bg-white dark:bg-black w-1/5"/>
	<textarea cols="30" rows="10" bind:value={text} class="w-3/5 h-6/12 text-center border-double border-2 border-black dark:border-white bg-mediumlightGray" />
	<div class="bg-white dark:bg-black w-1/5 "/>
</div>



