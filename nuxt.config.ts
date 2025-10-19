// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: {
        enabled: true,
    },
    typescript: {
        typeCheck: true,
    },
    modules: ["@nuxt/eslint", "@nuxt/ui"],
    alias: {
        "frappe-gantt/dist/frappe-gantt.css": "./node_modules/frappe-gantt/dist/frappe-gantt.css",
    },
});
