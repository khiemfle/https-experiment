var sslRootCas = require('ssl-root-cas/latest');
var https = require('https');
var fs = require('fs');

var rootCas = sslRootCas.create();
rootCas.addFile('rootCA.crt');
https.globalAgent.options.ca = rootCas;

var options = {
  host: 'KhiemAalto',
  path: '/colors',
  key: fs.readFileSync('client.test.key'),
  cert: fs.readFileSync('old.client.test.crt')
};

var req = https.get(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.end();