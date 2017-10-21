var express = require('express');

// express
var app = express();

// template
app.set('views', './dist');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// static
app.use('/static', express.static('dist'));

// content
app.get('/', (req, res) => {
  console.log("/root");
  res.render('index.html');
});

// server
app.listen(3000, () => {
  console.log('Express listening on port 3000!');
});
