<script lang="ts">
	import ActiveLink from './ActiveLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	let links = [
		{
			href: '/',
			title: 'Dashboard'
		},
		{
			href: '/about',
			title: 'About'
		}
	];
	import logo from '../libs/assets/logo.png';
</script>


<nav class="dark:bg-black bg-white mb-20 top-0">
	<div class="w-full">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center w-full">
				<div class="flex-auto">
					<img
						class="h-14 w-10 mt-20 mr-10 align-baseline object-cover sh"
						src={logo}
						alt="Emily the E-mail assistant"
					/>
				</div>
				<div class="hidden md:block w-full">
					<div class="mx-15 flex justify-end space-x-4 mt-14 mb-1/3">
						{#each links as { href, title }}
							<ActiveLink
								{href}
								baseClass="px-3 py-2 rounded-md text-sm font-medium mx-15"
								activeClass="bg-gray-200 text-gray-900 dark:text-gray-300 dark:bg-gray-900 dark:text-white mx-15"
								defaultClass="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900 mx-15"
							>
								{title}
							</ActiveLink>
						{/each}
						<ThemeToggle />
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>