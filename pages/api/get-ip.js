// pages/api/get-ip.js

export default function handler(req, res) {
  // Vercel forwards the original client IP in the 'x-forwarded-for' header.
  // This header can sometimes contain multiple IPs (the client + proxy servers).
  // The first IP is generally the true client IP.
  const ipWithProxies = req.headers['x-forwarded-for'];
  
  // Clean up the IP: If it's a string with commas, split it and take the first one.
  // Otherwise, use the whole value.
  const clientIp = Array.isArray(ipWithProxies) 
    ? ipWithProxies[0] 
    : (ipWithProxies?.split(',')[0].trim() || 'IP not found');
  
  // Send the result as a JSON response (like res.json() in Express)
  res.status(200).json({ 
    clientIp: clientIp,
    message: `Your IP address: ${clientIp}`
  });
}
