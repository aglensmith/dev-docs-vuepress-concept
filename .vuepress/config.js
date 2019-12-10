// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/

module.exports = {
  title: 'Dev Center',
  description: 'BigCommerce Developer Documentation',
  themeConfig: {
    nav: [
      { text: 'Guides', link: '/guides/' },
      { text: 'API Docs', link: '/api-docs/' },
      { text: 'Theme Docs', link: 'https://github.com/vicbergquist/codesandbox-vuepress/' },
      { text: 'Tools', link: 'https://github.com/vicbergquist/codesandbox-vuepress/' },
      { text: 'Blog', link: 'https://github.com/vicbergquist/codesandbox-vuepress/' },
      { text: 'Changelog', link: 'https://github.com/vicbergquist/codesandbox-vuepress/' },
    ]
  }
}