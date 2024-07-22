/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// Color Palette
			colors: {
				primary: "#222831",
				secondary: "#2D4059",
				accent: "#FF5722",
				light: "#EEEEEE",
			},
		},
	},
	plugins: [],
};
