const express = require('express');
const router = express.Router();

const {
  createPost,
  updatePost,
  deletePost,
  getOnePost,
  getManyPosts,
} = require('../handlers/posts.handler.js');

const validator = require('express-joi-validation').createValidator({
  passError: true
});

const Joi = require('joi');

const mySchema = Joi.object({
  name: Joi.required(),
  title: Joi.required(),
  content: Joi.required(),
  date: Joi.required(),
  authorId: Joi.required()
});

router.post('/', validator.body(mySchema), createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/:id', getOnePost);
router.get('/', getManyPosts);

module.exports = router;
