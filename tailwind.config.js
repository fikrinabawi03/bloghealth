/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#07090f',
                aurora: {
                    teal: '#0d9488',
                    emerald: '#10b981',
                    magenta: '#d946ef',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'noise': 'noise 1s steps(2) infinite',
                'aurora': 'aurora 20s ease infinite',
            },
            keyframes: {
                noise: {
                    '0%': { transform: 'translate(0,0)' },
                    '10%': { transform: 'translate(-5%,-5%)' },
                    '20%': { transform: 'translate(-10%,5%)' },
                    '30%': { transform: 'translate(5%,-10%)' },
                    '40%': { transform: 'translate(-5%,15%)' },
                    '50%': { transform: 'translate(-10%,5%)' },
                    '60%': { transform: 'translate(15%,0)' },
                    '70%': { transform: 'translate(0,10%)' },
                    '80%': { transform: 'translate(-15%,0)' },
                    '90%': { transform: 'translate(10%,5%)' },
                    '100%': { transform: 'translate(5%,0)' },
                },
                aurora: {
                    '0%, 100%': {
                        backgroundPosition: '0% 50%',
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                    },
                }
            }
        },
    },
    plugins: [],
}
