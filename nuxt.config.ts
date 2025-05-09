// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Young Webmaster Camp 20",
      meta: [
        {
          name: "description",
          content:
            "YWC20 ประกาศผลการคัดเลือก รอบสัมภาษณ์ ค่ายที่สร้างมืออาชีพให้กับหลายวงการมานานกว่า 20 ปี",
        },
        { name: "og:title", content: "Young Webmaster Camp 20" },
        {
          name: "og:description",
          content:
            "YWC20 ประกาศผลการคัดเลือก รอบสัมภาษณ์ ค่ายที่สร้างมืออาชีพให้กับหลายวงการมานานกว่า 20 ปี",
        },
        { name: "og:image:type", content: "image/png" },
        { name: "og:image:width", content: "1400" },
        { name: "og:image:height", content: "735" },
        {
          name: "og:image",
          content:
            "https://ywc20.ywc.in.th/opengraph-image.png?5ba5e9ef04633836",
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Mitr: true,
      "Noto Sans Thai": true,
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "motion-v/nuxt",
  ],
});
