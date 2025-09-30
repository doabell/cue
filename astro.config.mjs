import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    srcDir: "./src",
    publicDir: "./public",
    integrations: [
        react(),
        tailwind({
            configFile: "./tailwind.config.ts",
        }),
    ],
    alias: {
        "@": "./src",
    },
});
