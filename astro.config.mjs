import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://seralab.korea.ac.kr",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()]
});
