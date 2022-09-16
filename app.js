const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const { config } = require('dotenv');
const { join } = require('path');


config();

// Serve static files
app.use(express.static(join(__dirname, '/public')));


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');