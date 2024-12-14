import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/paradise-nursery-shopping-cart-app",
    plugins: [react()],
    build: {
        assetsInclude: ['**/*.{css,js,jsx,jpg,jpeg,png,svg}'] // Include common asset types
      }
})
