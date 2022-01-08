const express = require('express');
const bodyParser = require('body-parser');

const db = require('./models');

const port = 3000;
const app = express();

app.use(bodyParser.json());


/**
 *  CRUD User
 */

// Create
app.post('/users', (req, res) => {
  const { lastName, firstName, email, userName, githubLink } = req.body;
  return db.User.create({ lastName, firstName, email, userName, githubLink })
    .then((user) => res.send(user))
    .catch((err) => {
      console.log('***There was an error creating a user', JSON.stringify(user));
      return res.status(400).send(err);
    });
});

// Read One
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  return db.User.findByPK(id)
    .then((user) => res.send(user))
    .catch((err) => {
      console.log('There was an error querying user', JSON.stringify(err));
      return res.send(err)
    });
});

// Read All
app.get('/users', (req, res) => {
  return db.User.findAll()
    .then((users) => res.send(users))
    .catch((err) => {
      console.log('There was an error querying users', JSON.stringify(err));
      return res.send(err);
    });
});

// Update
app.patch('/users/:id', (req, res) => {
  const id = req.params.id;
  return db.User.findById(id)
  .then((user) => {
    const { lastName, firstName, email, userName, githubLink } = req.body;
    return user.update({ lastName, firstName, email, userName, githubLink })
      .then(() => res.send(user))
      .catch((err) => {
        console.log('***Error updating user', JSON.stringify(err));
        res.status(400).send(err);
      });
  })
  .catch((err) => {
    console.log('***The user does not exist');
    return res.status(400).send(err);
  });
});

// Delete
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  return db.User.findById(id)
    .then((user) => user.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting user', JSON.stringify(err));
      res.status(400).send(err);
    });
});


/**
 *  CRUD Role
 */


/**
 *  CRUD Post
 */


/**
 *  CRUD Comment
 */



app.listen(port, ( ) => {
  console.log(`App listening at http://localhost:${port}`);
});
