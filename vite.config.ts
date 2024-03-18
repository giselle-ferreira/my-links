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
//     "process.env": process.env,
//     SERVICE_ID: process.env.SERVICE_ID,
//     TEMPLATE_ID: process.env.TEMPLATE_ID,
//     CHAVE: process.env.CHAVE,
//   },
// })


