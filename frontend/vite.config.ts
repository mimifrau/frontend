import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths'
import {VitePWA, VitePWAOptions} from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
        name: 'НДФЛ',
        short_name: 'НДФЛ',
        description: 'Description',
        theme_color: '#ffffff',
        icons: [
            {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    }
};

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
    base: "/rip",
    plugins: [
        react(),
        tsconfigPaths(),
        VitePWA(manifestForPlugin)
    ],
    clearScreen: false,
    server: {
        port: 3000,
        strictPort: true,
        host: host || false,
        proxy: {
            "/api": {
                target: "http://192.168.1.73:8000"
            }
        },
        watch: {
            ignored: ["**/src-tauri/**"]
        },
    },
});
