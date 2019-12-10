// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/

module.exports = {
  title: "BigCommerce Dev Center",
  description: "Build amazing commerce solutions \n powered by the BigCommerce platform",
  themeConfig: {
    nav: [
      { text: "Guides", link: "/guides/" },
      { text: "API Docs", link: "/api-docs/" },
      {
        text: "Theme Docs",
        link: "/stencil-docs/"
      },
      {
        text: "Tools",
        link: "/tools-resources/"
      },
      {
        text: "Blog",
        link: "https://medium.com/bigcommerce-developer-blog",
        target: "_blank"
      },
      {
        text: "Changelog",
        link: "/changelog/"
      }
    ],
    sidebar: [
      {
        title: "Getting Started",
        path: "/api-docs/getting-started/making-requests.md",
        sidebarDepth: 0,
        children: [
          "/api-docs/getting-started/making-requests.md",
          "/api-docs/getting-started/about-our-api.md",
          "/api-docs/getting-started/authentication.md",
          "/api-docs/getting-started/best-practices.md",
          "/api-docs/getting-started/filtering.md",
          "/api-docs/getting-started/api-status-codes.md",
          {
            title: "Building Apps",
            path:
              "/api-docs/getting-started/building-apps-bigcommerce/building-apps/",
            children: [
              "/api-docs/getting-started/building-apps-bigcommerce/building-apps.md",
              "/api-docs/getting-started/building-apps-bigcommerce/types-of-apps.md"
            ]
          }
        ]
      }
    ]
  },
  head: [
    ['script', { src: '/js/dev-docs.js' }]
  ]
};
