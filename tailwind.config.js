/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#020617", // Slate 950
                secondary: "#0f172a", // Slate 900
                accent: "#06b6d4", // Cyan 500 (Neon Blue-ish)
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'spin-reverse-slow': 'spin 15s linear infinite reverse',
            },
            boxShadow: {
                'neon': '0 0 20px rgba(6, 182, 212, 0.5)',
                'neon-sm': '0 0 15px rgba(6, 182, 212, 0.3)',
                'neon-lg': '0 0 30px rgba(6, 182, 212, 0.15)',
            }
        },
    },
    plugins: [],
}
