const express = require('express');
const next = require('next');
const url = require('url');

const app = next({ dev: false });
const handle = app.getRequestHandler();

const server = express();

server.all('*', (req, res) => {
	let clientIp = req.ip
	res.json({ message: "raph, wtf. "+ clientIp })
});

module.exports = async (req, res) => {
	await app.prepare();
	return server(req, res);
};
