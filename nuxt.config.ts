export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  modules: ["@nuxthub/core", "@nuxt/eslint", "@nuxt/ui"],
  hub: {
    database: true,
    kv: true,
    blob: true,
    cache: true,
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  devtools: { enabled: true },
});
