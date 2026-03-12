import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      // Treat absolute-path image references as external so the build
      // does not fail on images that live in /public but are not yet committed.
      external: (id: string) =>
        id.startsWith('/') && /\.(jpg|jpeg|png|gif|webp|svg)$/.test(id),
    },
  },
})
