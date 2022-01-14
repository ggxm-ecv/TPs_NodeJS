const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const Joi = require('joi');

const controller = require('../controllers/user.controller');

const registerUserSchema = Joi.object({
  lastname: Joi.string().required(),
  firstname: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  githubUrl: Joi.string().uri().required(),
  role_id: Joi.string().uuid().required()
});

const updateUserSchema = Joi.object({
  lastname: Joi.string().required(),
  firstname: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  githubUrl: Joi.string().uri().required(),
  role_id: Joi.string().uuid().required()
});

const getUserSchema = Joi.object({
  id: Joi.string().uuid().required(),
  lastname: Joi.string().required(),
  firstname: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  githubUrl: Joi.string().uri().required(),
  role_id: Joi.string().uuid().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required()
}).unknown(true);

const getAllUsersSchema = Joi.array().items(getUserSchema);


router.get('/', validator.response(getAllUsersSchema), controller.getUsers);
router.get('/:id', validator.response(getUserSchema), controller.getUser);
router.post('/', validator.body(registerUserSchema), controller.createUser);
router.patch('/:id', validator.body(updateUserSchema), controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;