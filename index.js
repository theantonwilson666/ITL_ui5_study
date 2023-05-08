
const connect  = require('connect');
const compiler = require('connect-compiler');
const static = require('serve-static');
const { createProxyMiddleware } = require('http-proxy-middleware');

//config
const dotenv = require('dotenv');
dotenv.config();

const server = connect();


// Libs
server.use('/resources', static(process.env.LIB_RESOURCES));
server.use('/test-resources', static(process.env.LIB_TEST_RESOURCES));

//OData proxy
server.use('/sap', createProxyMiddleware({ target: process.env.BACKEND_URL, changeOrigin: true }));

//apps
server.use(static(__dirname + '/src'));

//Start server
server.listen(process.env.PORT);


//liveReload
const livereload = require('livereload');
const lrserver = livereload.createServer({
    exts : ['js', 'xml', 'css', 'html']
});

lrserver.watch(__dirname + "/src");