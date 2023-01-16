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
</script>


<nav class="dark:bg-gray-800 bg-secondary">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center w-full">
				<div class="flex-shrink-0">
					<img
						class="h-8 w-8"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
						alt="Your Company"
					/>
				</div>
				<div class="hidden md:block w-full">
					<div class="ml-10 flex items-baseline space-x-4">
						{#each links as { href, title }}
							<ActiveLink
								{href}
								baseClass="px-3 py-2 rounded-md text-sm font-medium"
								activeClass="bg-gray-200 text-gray-900 dark:text-gray-300 dark:bg-gray-900 dark:text-white"
								defaultClass="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900"
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