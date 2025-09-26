const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

	const server = express();

  // Custom API routes
  server.get('/old-page', (req, res) => {
	let clientIp = req.ip
	res.json({ message: "raph, wtf."+ clientIp });
  });

  // Let Next.js handle everything else
  server.all('/{*rest}', (req, res) => {
	let clientIp = req.ip
	res.json({ message: "raph, wtf."+ clientIp })
//    return handle(req, res);
  });

  server.listen(3000, (err) => {
	if (err) throw err;
	console.log('> Ready on http://localhost:3000');
  });
});

