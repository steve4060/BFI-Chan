import { defineConfig } from 'vite'
import jsonServer from 'vite-plugin-simple-json-server';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), jsonServer({
        urlPrefixes: [
            '/json/'
        ],
        limit: 100,
        mockDir: 'json',
        staticDir: 'public',
    })],
})
