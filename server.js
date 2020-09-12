
// const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const app = express();
 
// const forceSSL = function () {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//         ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// };

// app.use(express.static('./dist/demo-deploy-heroku'));
 
// app.get('/*', function (req, res) {
//   res.sendFile(path.join('ePortfolio', '/dist/demo-deploy-heroku/index.html'));
// });
 
// app.use(forceSSL());
 
// app.listen(process.env.PORT || 8080);


//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<demo-deploy-angular-heroku>'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/<demo-deploy-angular-heroku>/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);