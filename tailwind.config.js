/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                primary: "#f97316",
                dark: "#2d0b00",
                cream: "#f5efe6",
            },

            fontFamily: {
                heading: ['Cormorant Garamond', 'serif'],
                body: ['Outfit', 'sans-serif'],
            },
        },
    },

    plugins: [],
}