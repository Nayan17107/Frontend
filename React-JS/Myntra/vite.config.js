// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // This fixes path issues
  build: {
    assetsDir: 'assets',
    assetsInlineLimit: 4096, // Files smaller than 4kb become base64
  }
})