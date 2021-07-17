const express = require('express');
var compression = require('compression')
const app = express();
const port = 3000;

app.use(compression());

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Catwalk app listening at http://localhost:${port}`);
});