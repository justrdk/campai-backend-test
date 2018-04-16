const Hapi = require('hapi');
const chalk = require('chalk');
const routes = require('./app/routes');

const error = chalk.red.bold;
const success = chalk.green.bold;

const server = Hapi.server({
	host: 'localhost',
	port: 3001,
	routes: {
		cors: true,
	},
});

server
	.start()
	.then(() => {
		server.route(routes);
		console.log(success('Server started at localhost'));
	})
	.catch(err => console.log(error(`Error: ${err}`)));
