/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'brand-gray-dark': '#1E1E1E',
                'brand-gray-light': '#2C2C2C',
                'brand-purple-dark': '#761CE9',
                'brand-purple-light': '#9148EE',
            },
            spacing: {
                large: '30rem',
            },
        },
    },
    plugins: [],
};
