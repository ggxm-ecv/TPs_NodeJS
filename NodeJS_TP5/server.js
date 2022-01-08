const express = require('express');
const bodyParser = require('body-parser');

const { User, Role, Post, Comment } = require('./models');

const port = 3000;
const app = express();

app.use(bodyParser.json());


/**
 *  CRUD User
 */

// Create
app.post('/users', async (req, res) => {
  try {
    const { lastName, firstName, email, userName, githubLink, role_id } = req.body;
    const user = await User.create({ lastName, firstName, email, userName, githubLink, role_id });
    console.log('User created');
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send('User not created');
  }
});

// Read One
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const hidePosts = req.query.hide_posts;
    const user = await User.findByPK(id);
    if (!user) {
      throw Error('User not found');
    }
    if (hidePosts == 'true') {
      delete user.posts;
      res.send(user);
    } else {
      res.send(user);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Read All
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users) {
      throw Error('Users not found');
    }
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Update
app.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { lastName, firstName, email, userName, githubLink, role_id } = req.body;
    let user = await User.findById(id);
    if (!user) {
      throw Error('User not found');
    }
    user = await user.update({ lastName, firstName, email, userName, githubLink, role_id });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Delete
app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    let user = await User.findById(id);
    if (!user) {
      throw Error('User not found');
    }
    user = await user.destroy({ force: true });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});


/**
 *  CRUD Role
 */

// Create
app.post('/roles', async (req, res) => {
  try {
    const { name } = req.body;
    const role = await Role.create({ name });
    console.log('Role created');
    res.json(role);
  } catch (err) {
    console.log(err);
    res.status(400).send('Role not created');
  }
});

// Read One
app.get('/roles/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const role = await Role.findByPK(id);
    if (!role) {
      throw Error('Role not found');
    }
    res.send(role);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Read All
app.get('/roles', async (req, res) => {
  try {
    const roles = await Role.findAll();
    if (!roles) {
      throw Error('Roles not found');
    }
    res.json(roles);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Update
app.patch('/roles/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    let role = await Role.findById(id);
    if (!role) {
      throw Error('Role not found');
    }
    role = await role.update({ name });
    res.json(role);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Delete
app.delete('/roles/:id', async (req, res) => {
  try {
    const id = req.params.id;
    let role = await Role.findById(id);
    if (!role) {
      throw Error('Role not found');
    }
    role = await role.destroy({ force: true });
    res.json(role);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});


/**
 *  CRUD Post
 */

// Create
app.post('/posts', async (req, res) => {
  try {
    const { title, content, date, user_id } = req.body;
    const post = await Post.create({ title, content, date, user_id });
    console.log('Post created');
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(400).send('Post not created');
  }
});

// Read One
app.get('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const hideComments = req.query.hide_comments;
    const post = await Post.findByPK(id);
    if (!post) {
      throw Error('Post not found');
    }
    if (hideComments == 'true') {
      delete post.comments;
      res.send(post);
    } else {
      res.send(post);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Read All
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll();
    if (!posts) {
      throw Error('Posts not found');
    }
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Update
app.patch('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content, date, user_id } = req.body;
    let post = await Post.findById(id);
    if (!post) {
      throw Error('Post not found');
    }
    post = await post.update({ title, content, date, user_id });
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Delete
app.delete('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    let post = await Post.findById(id);
    if (!post) {
      throw Error('Post not found');
    }
    post = await post.destroy({ force: true });
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});


/**
 *  CRUD Comment
 */

// Create
app.post('/comments', async (req, res) => {
  try {
    const { content, date, user_id, post_id } = req.body;
    const comment = await Comment.create({ content, date, user_id, post_id });
    console.log('Comment created');
    res.json(comment);
  } catch (err) {
    console.log(err);
    res.status(400).send('Comment not created');
  }
});

// Read One
app.get('/comments/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const comment = await Comment.findByPK(id);
    if (!comment) {
      throw Error('Comment not found');
    }
    res.send(comment);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Read All
app.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.findAll();
    if (!comments) {
      throw Error('Comments not found');
    }
    res.json(comments);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Update
app.patch('/comments/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { content, date, user_id, post_id } = req.body;
    let comment = await Comment.findById(id);
    if (!comment) {
      throw Error('Comment not found');
    }
    comment = await comment.update({ content, date, user_id, post_id });
    res.json(comment);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// Delete
app.delete('/comments/:id', async (req, res) => {
  try {
    const id = req.params.id;
    let comment = await Comment.findById(id);
    if (!comment) {
      throw Error('Comment not found');
    }
    comment = await comment.destroy({ force: true });
    res.json(comment);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});



app.listen(port, ( ) => {
  console.log(`App listening at http://localhost:${port}`);
});
