/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'post-no-bills-regular': [
					'PostNoBillsColombo-Regular',
					'sans-serif',
				],
				// "post-no-bills-bold": ["PostNoBillsColombo-Bold", "sans-serif"],
			},
		},
	},
	daisyui: {
		themes: ['sunset'],
	},
	plugins: [require('daisyui')],
};
