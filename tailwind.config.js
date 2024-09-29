import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#222",
                "green-custom": "#00ff91",
                "green-custom-light": "#ebfff5",
                "blue-custom": "#1139ff",
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            transitionProperty: {
                'r': 'r',
                'stroke-width': 'stroke-width',
                'fill': 'fill',
            },
        }
    },
    plugins: [
        require("tailwindcss-animate"),
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-none": {
                    "scrollbar-width": "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            });
        }),
    ],
    variants: {
        extend: {
            r: ['hover', 'focus'],
            strokeWidth: ['hover', 'focus'],
            fill: ['hover', 'focus'],
        },
    },
}

