const express = require('express');
const bodyParser = require('body-parser');

// const { User } = require('./sequelize.js');

const port = 3000;
const app = express();

app.use(bodyParser.json());

// app.get('/', async function(req, res) {
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//   res.json(jane);
// });

app.listen(port, ( ) => {
  console.log(`App listening at http://localhost:${port}`);
})

/************************************
 * Usefull command to copy/past
 * 
 
npx sequelize-cli model:generate --name XXX --attributes xxx:string,yyy:string

===

npx sequelize-cli model:generate --name Role --attributes name:string



***/

