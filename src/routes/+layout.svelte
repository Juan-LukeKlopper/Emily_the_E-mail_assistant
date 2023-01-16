<script>
	import '../app.postcss';
	import Navbar from './Navbar.svelte';
</script>

<body lang="en" class="bg-white dark:bg-black w-full h-full ">
<Navbar />

<slot />
</body>