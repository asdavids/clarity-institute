import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        dashboard: 'dashboard.html',
        login: 'login.html',
        course: 'course.html'
      }
    }
  }
})
