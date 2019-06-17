module.exports = {
    publicPath: '/fe',
    devServer: {
        proxyTable: {
            '/api': {
                target: 'http://127.0.0.1:3000/api/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        '/bpi': {
            target: 'http://bbs.xitouwang.com',
            ws: true,
            changeOrigin: true,
            secure: true,
            pathRewrite: {
                '^/bpi': ""
            }
        }
    }
}
