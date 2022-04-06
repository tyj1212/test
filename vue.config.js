const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
    configureWebpack: config => {
        const plugins = [];
        plugins.push(Components({
            dirs: ['src/components'],
            resolvers: [ElementPlusResolver()],
        }))
        return {plugins}
    },
};
