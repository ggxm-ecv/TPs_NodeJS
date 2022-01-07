const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.json());

// For exo 7
require('./routes')(app);

// For exo 9
require('./handlers/users')(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
