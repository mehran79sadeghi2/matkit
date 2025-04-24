import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.tsx',
      name: "matkit-package",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    }
  }
})
