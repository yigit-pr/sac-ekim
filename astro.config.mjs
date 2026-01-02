import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        plugins: [tailwind()],
    },
    output: 'server',
    adapter: vercel(),
});
