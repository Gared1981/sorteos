import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  root: '../', // 👈 Ajusta si estás una carpeta abajo
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, '../index.html') // 👈 Ruta absoluta a index
    }
  }
})
