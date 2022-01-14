const express = require('express');
const router = express.Router();

const {
  createComment,
  updateComment,
  deleteComment,
  getOneComment,
  getManyComments,
} = require('../handlers/comments.handler.js');

const validator = require('express-joi-validation').createValidator({
  passError: true
});

const Joi = require('joi');

const mySchema = Joi.object({
  name: Joi.required(),
  content: Joi.required(),
  date: Joi.required(),
  postId: Joi.required(),
  authorId: Joi.required()
});

router.post('/', validator.body(mySchema), createComment);
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);
router.get('/:id', getOneComment);
router.get('/', getManyComments);

module.exports = router;
