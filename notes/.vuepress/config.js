const path = require('path')
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/web-visualization/',
    themeConfig: {
        navbar: false,
        sidebar: [
            // '/',
            '/basic/canvas',
            '/basic/svg',
            '/basic/webgl',
        ]
    },
    chainWebpack(config) {
        console.log(config.module.rule('load-demo').test(/\.md/))
        config.module.rule('load-demo').test(/\.md/).pre().use('relove-demo-loader').loader(path.resolve(__dirname, 'resolveDemo.js'))
    }
}