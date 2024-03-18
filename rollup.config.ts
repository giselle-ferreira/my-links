// rollup.config.js
import ImportMetaEnvPlugin from "@import-meta-env/unplugin";

export default {
    plugins: [
        ImportMetaEnvPlugin.rollup({
            example: ".env",
        }),
    ],
};
