const express = require('express');
const bodyParser = require('body-parser');

const db = require('./models');

const port = 3000;
const app = express();

app.use(bodyParser.json());


/**
 *  CRUD User
 */

//  {
//   "lastName": "Gautier",
//   "firstName": "Maire",
//   "email": "test@test.fr",
//   "userName": "ggxm",
//   "githubLink": "https://github.com/ggxm-ecv"
// }

// Create
app.post('/users', (req, res) => {
  const { lastName, firstName, email, userName, githubLink, role_id } = req.body;
  return db.User.create({ lastName, firstName, email, userName, githubLink, role_id })
    .then((user) => res.send(user))
    .catch((err) => {
      console.log('***There was an error creating a user');
      return res.status(400).send(err);
    });
});

// Read One
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const allowPosts = req.query.allow_posts;
  return db.User.findByPK(id)
    .then((user) => {
      res.send(user);
      if (allowPosts == 'true') {
        res.send(user);
      } else {
        delete user.posts;
        res.send(user);
      }
    })
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
    const { lastName, firstName, email, userName, githubLink, role_id } = req.body;
    return user.update({ lastName, firstName, email, userName, githubLink, role_id })
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

// Create
app.post('/roles', (req, res) => {
  const { name } = req.body;
  return db.Role.create({ name })
    .then((role) => res.send(role))
    .catch((err) => {
      console.log('***There was an error creating a role');
      return res.status(400).send(err);
    });
});

// Read One
app.get('/roles/:id', (req, res) => {
  const id = req.params.id;
  return db.Role.findByPK(id)
    .then((role) => res.send(role))
    .catch((err) => {
      console.log('There was an error querying role', JSON.stringify(err));
      return res.send(err)
    });
});

// Read All
app.get('/roles', (req, res) => {
  return db.Role.findAll()
    .then((roles) => res.send(roles))
    .catch((err) => {
      console.log('There was an error querying roles', JSON.stringify(err));
      return res.send(err);
    });
});

// Update
app.patch('/roles/:id', (req, res) => {
  const id = req.params.id;
  return db.Role.findById(id)
  .then((role) => {
    const { name } = req.body;
    return role.update({ name })
      .then(() => res.send(role))
      .catch((err) => {
        console.log('***Error updating role', JSON.stringify(err));
        res.status(400).send(err);
      });
  })
  .catch((err) => {
    console.log('***The role does not exist');
    return res.status(400).send(err);
  });
});

// Delete
app.delete('/roles/:id', (req, res) => {
  const id = req.params.id;
  return db.Role.findById(id)
    .then((role) => role.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting role', JSON.stringify(err));
      res.status(400).send(err);
    });
});


/**
 *  CRUD Post
 */

// Create
app.post('/posts', (req, res) => {
  const { title, content, date, user_id } = req.body;
  return db.Post.create({ title, content, date, user_id })
    .then((post) => res.send(post))
    .catch((err) => {
      console.log('***There was an error creating a post');
      return res.status(400).send(err);
    });
});

// Read One
app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const allowComments = req.query.allow_comments;
  return db.Post.findByPK(id)
    .then((post) => {
      if (allowComments == 'true') {
        res.send(post);
      } else {
        delete post.comments;
        res.send(post);
      }
    })
    .catch((err) => {
      console.log('There was an error querying post', JSON.stringify(err));
      return res.send(err)
    });
});

// Read All
app.get('/posts', (req, res) => {
  return db.Post.findAll()
    .then((posts) => res.send(posts))
    .catch((err) => {
      console.log('There was an error querying posts', JSON.stringify(err));
      return res.send(err);
    });
});

// Update
app.patch('/posts/:id', (req, res) => {
  const id = req.params.id;
  return db.Post.findById(id)
  .then((post) => {
    const { title, content, date, user_id } = req.body;
    return post.update({ title, content, date, user_id })
      .then(() => res.send(post))
      .catch((err) => {
        console.log('***Error updating post', JSON.stringify(err));
        res.status(400).send(err);
      });
  })
  .catch((err) => {
    console.log('***The post does not exist');
    return res.status(400).send(err);
  });
});

// Delete
app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
  return db.Post.findById(id)
    .then((post) => post.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting post', JSON.stringify(err));
      res.status(400).send(err);
    });
});


/**
 *  CRUD Comment
 */

// Create
app.post('/comments', (req, res) => {
  const { content, date, user_id, post_id } = req.body;
  return db.Comment.create({ content, date, user_id, post_id })
    .then((comment) => res.send(comment))
    .catch((err) => {
      console.log('***There was an error creating a comment');
      return res.status(400).send(err);
    });
});

// Read One
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  return db.Comment.findByPK(id)
    .then((comment) => res.send(comment))
    .catch((err) => {
      console.log('There was an error querying comment', JSON.stringify(err));
      return res.send(err)
    });
});

// Read All
app.get('/comments', (req, res) => {
  return db.Comment.findAll()
    .then((comments) => res.send(comments))
    .catch((err) => {
      console.log('There was an error querying comments', JSON.stringify(err));
      return res.send(err);
    });
});

// Update
app.patch('/comments/:id', (req, res) => {
  const id = req.params.id;
  return db.Comment.findById(id)
  .then((comment) => {
    const { content, date, user_id, post_id } = req.body;
    return comment.update({ content, date, user_id, post_id })
      .then(() => res.send(comment))
      .catch((err) => {
        console.log('***Error updating comment', JSON.stringify(err));
        res.status(400).send(err);
      });
  })
  .catch((err) => {
    console.log('***The comment does not exist');
    return res.status(400).send(err);
  });
});

// Delete
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  return db.Comment.findById(id)
    .then((comment) => comment.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting comment', JSON.stringify(err));
      res.status(400).send(err);
    });
});



app.listen(port, ( ) => {
  console.log(`App listening at http://localhost:${port}`);
});
