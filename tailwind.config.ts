import type { Config } from 'tailwindcss';

export default {
    darkMode: 'class',
    content: [
        './app/**/*.{vue,js,ts}',
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                // Background colors
                dark: {
                    DEFAULT: '#0a0a0a',
                    50: '#171717',
                    100: '#1a1a1a',
                    200: '#262626',
                    300: '#333333',
                    400: '#404040',
                },
                // Accent colors
                hype: {
                    DEFAULT: '#f59e0b',
                    light: '#fbbf24',
                    dark: '#d97706',
                    glow: 'rgba(245, 158, 11, 0.3)',
                },
                trash: {
                    DEFAULT: '#ef4444',
                    light: '#f87171',
                    dark: '#dc2626',
                },
                // Text colors
                text: {
                    primary: '#fafafa',
                    secondary: '#a1a1aa',
                    muted: '#71717a',
                },
            },
            boxShadow: {
                hype: '0 0 20px rgba(245, 158, 11, 0.4)',
                card: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                glow: 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(245, 158, 11, 0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.6)' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
