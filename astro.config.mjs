import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import orama from "@orama/plugin-astro";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    orama({
      // We can generate more than one DB, with different configurations
      mydb: {
        // Required. Only pages matching this path regex will be indexed
        pathMatcher: /blog.+$/,
      },
    }),
  ],
});
