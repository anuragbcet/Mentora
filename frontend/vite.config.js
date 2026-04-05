import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{
  //   proxy:{
  //     "/api":{
  //       target:"http://localhost:3000",
  //       changeOrigin:true
  //     }
  //   }
  // }
  //this works mainly during the development and doesn't work properly when it comes to production
})
