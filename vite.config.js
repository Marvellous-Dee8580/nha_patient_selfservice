import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'nha_patient_selfservice',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['framer-motion'], // Add framer-motion to external dependencies
    }
  }
});