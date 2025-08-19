import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  base: "/"   // 👈 ต้องใส่ชื่อ repo ตรงนี้
})
