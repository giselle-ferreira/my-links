import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ImportMetaEnvPlugin from '@import-meta-env/unplugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ImportMetaEnvPlugin.vite({
      example: ".env",
    }),
    react()
  ]
})


// export default defineConfig({
//   plugins: [
//     react()
//   ],
//   define: {
//     "import.meta.env": import.meta.env,
//     SERVICE_ID: import.meta.env.SERVICE_ID,
//     TEMPLATE_ID: import.meta.TEMPLATE_ID,
//     PUBLIC_KEY: import.meta.PUBLIC_KEY,
//   },
// })


