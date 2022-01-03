module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    },
    // configureWebpack: {
    //     target: 'web'
    // }
}