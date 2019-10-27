const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', {
        target: process.env.REACT_APP_DRAWING_SERVER_URL,
        changeOrigin: true,
        pathRewrite: {'^/api' : ''},
        ws: true,
        cookieDomainRewrite: '*',
    }));
};
