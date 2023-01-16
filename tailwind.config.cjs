const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode : 'class',
	theme: {
		extend: {
			colors: {
				primary: '#ab51e3',
				secondary: '#35e95f',
				darkGray: "#191a21",
				lightGray: "#9397bb",
				mediumlightGray: "#787c9c",
				mediumdarkGray: "#2e2f3c",
			}
		}
	},

	plugins: []
};

module.exports = config;
