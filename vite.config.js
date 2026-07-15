import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FinanceTracker/', // This MUST match your repository name exactly
})


// git add .
// git commit -m "Fix Vite base path for deployment"
// git branch -M main
// git push -u origin main