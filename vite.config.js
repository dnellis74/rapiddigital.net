import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      input: {
        main: 'index.html',
        payment: 'payment.html'
      }
    }
  }
}) 