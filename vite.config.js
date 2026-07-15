import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FinanceTracker/', // <-- Make sure this matches your new repo name exactly!
})