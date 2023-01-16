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
			}
		}
	},

	plugins: []
};

module.exports = config;
