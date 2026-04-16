import { URL } from "node:url"
import { fileURLToPath } from "node:url"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 5173
    },
    resolve: {
        alias: {
            "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
            "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
            "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
            "@root": fileURLToPath(new URL("./", import.meta.url))
        }
    }
})
