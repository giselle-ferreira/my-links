interface ImportMeta {
    readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
    readonly SERVICE_ID: string;
    readonly TEMPLATE_ID: string;
    readonly PUBLIC_KEY: string;
}