const path = require('path')
const baseURL = require('../../scripts/getBaseUrl');
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: baseURL,
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
        config.module.rule('load-demo').test(/\.md/).pre().use('relove-demo-loader').loader(path.resolve(__dirname, 'resolveDemo.js'))
    }
}