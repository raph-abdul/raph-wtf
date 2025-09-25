const express = require('express');

const app = express();
const PORT = 3000;

// Must be set for req.ip to work correctly begind a proxy/load balancer
// 'trust proxy' can be true or an array of IP addresses/subnets
app.set('trust proxy', true); 

app.get('/', (req, res)=>{
	let clientIp = req.ip
	let clientIpAlternatives = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0].trim() : req.socket.remoteAddress;
	res.status(200);
	res.send("I have your IP address: "+ clientIp +" - now Im gonna have to kill you.");
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log ("Server running app listening to port "+ PORT);
	else
		console.log("Error occurrer", error);
	}
);
