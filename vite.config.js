import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  "base": "/where_is_the_world/",
  plugins: [react()],
})
