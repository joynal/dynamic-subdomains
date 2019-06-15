const express = require('express');
const wildcardSubdomains = require('wildcard-subdomains');

const app = express();

// add wildcard subdomain middleware to express
app.use(wildcardSubdomains({
  whitelist: ['www', 'm', 'mobile'],
}));

// serve static files
app.use('/_sub/:subdomain', (req, res) => res.send(`${req.params.subdomain} is working!`));
app.use('/', (req, res) => res.send('Home'));

app.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000/');
});
