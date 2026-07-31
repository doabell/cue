import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
    site: "https://cue.doabell.com",
    srcDir: "./src",
    publicDir: "./public",
    integrations: [react()],
    alias: {
        "@": "./src",
    },
});
