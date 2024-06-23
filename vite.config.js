import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
server: {
  proxy: {
    '/api' : {
      
      target: 'https://api.tomorrow.io/v4/timelines?location=40.7128,-74.0060&fields=temperature,weatherCode&apikey=OAUMwf91TOBEOT6lQE8Z08YXtfQuzIaT' ,
      changeOrigin: true,
      rewrite: (path) => path.replace (/^\/api/, ''),
    },         
  }
}
})
