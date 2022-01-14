const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const Joi = require('joi');

const controller = require('../controllers/comment.controller');

const registerCommentSchema = Joi.object({
  content: Joi.string().required(),
  date: Joi.date().required(),
  author: Joi.string().required(),
  post_id: Joi.string().uuid().required()
});

const updateCommentSchema = Joi.object({
  content: Joi.string().required(),
  date: Joi.date().required(),
  author: Joi.string().required(),
  post_id: Joi.string().uuid().required()
});

const getCommentSchema = Joi.object({
  id: Joi.string().uuid().required(),
  content: Joi.string().required(),
  date: Joi.date().required(),
  author: Joi.string().required(),
  post_id: Joi.string().uuid().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required()
}).unknown(true);

const getAllCommentsSchema = Joi.array().items(getCommentSchema);


const commentMiddleware = (req, res, next) => {
  res.set({'App-Context': 'Comments'});
  console.log(res.header('App-Context'));
  next();
}
router.use(commentMiddleware);

router.get('/',validator.response(getAllCommentsSchema), controller.getComments)
router.get('/:id',validator.response(getCommentSchema), controller.getComment)
router.post('/',validator.body(registerCommentSchema), controller.createComment)
router.patch('/:id',validator.body(updateCommentSchema), controller.updateComment)
router.delete('/:id', controller.deleteComment)

module.exports = router;