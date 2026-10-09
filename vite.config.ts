import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { postProcessDistHtml } from './scripts/html-postprocess'

const foucGuard = (): Plugin => ({
  name: 'fouc-guard',
  transformIndexHtml: {
    order: 'post',
    handler(html) {
      return postProcessDistHtml(html)
    },
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), foucGuard()],
  server: {
    port: 3000,
    open: false
  }
})
