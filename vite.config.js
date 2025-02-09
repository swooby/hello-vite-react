import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/hello-vite-react/',
  plugins: [viteReact()],
})
