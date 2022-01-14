const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const Joi = require('joi');

const controller = require('../controllers/post.controller');

const registerPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  date: Joi.date().required(),
  author: Joi.string().required()
});

const updatePostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  date: Joi.date().required(),
  author: Joi.string().required()
});

const getPostSchema = Joi.object({
  id: Joi.string().uuid().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  date: Joi.date().required(),
  author: Joi.string().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required()
}).unknown(true);

const getAllPostsSchema = Joi.array().items(getPostSchema);

router.get('/',validator.response(getAllPostsSchema), controller.getPosts)
router.get('/:id',validator.response(getPostSchema), controller.getPost)
router.post('/',validator.body(registerPostSchema), controller.createPost)
router.patch('/:id',validator.body(updatePostSchema), controller.updatePost)
router.delete('/:id', controller.deletePost)

module.exports = router;