export default {
  srcDir: "client",

  mode: "universal",

  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//fonts.googleapis.com/css?family=Noto+Sans+KR"
      }
    ]
  },

  loading: { color: "#fff" },

  css: ["~/assets/styles/main.scss"],
  styleResources: {
    sass: ["@/assets/styles/main.scss"]
  },

  plugins: [],
  buildModules: [],
  modules: ["@nuxtjs/axios", "@nuxtjs/style-resources"],

  axios: {},

  build: {
    postcss: {
      plugins: {
        "postcss-preset-env": {
          autoprefixer: { grid: true }
        }
      }
    }
    // ...
  }
};
