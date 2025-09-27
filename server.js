const express = require('express');
const next = require('next');
const url = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: process.env.NODE_ENV !== 'production' });
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
