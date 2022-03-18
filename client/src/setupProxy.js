const { createProxyMiddleware } = require('http-proxy-middleware');

const API_IP = 'localhost';
const API_PORT = 8080;

module.exports = (app) => {
	app.use(
		'/api',
		createProxyMiddleware({
			target: `http://${API_IP}:${API_PORT}`,
			changeOrigin: true
		})
	);
	app.use(
		'/login/oauth/access_token',
		createProxyMiddleware({
			target: 'https://github.com',
			changeOrigin: true
		})
	);
};