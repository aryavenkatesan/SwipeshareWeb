import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // @ts-expect-error - types not ready yet
  plugins: [react(), tailwindcss()],
  base: '/SwipeshareWeb/',
})