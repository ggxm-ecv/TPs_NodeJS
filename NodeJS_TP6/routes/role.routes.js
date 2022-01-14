const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const Joi = require('joi');

const controller = require('../controllers/role.controller');

const registerRoleSchema = Joi.object({
  name: Joi.string().required()
});

const updateRoleSchema = Joi.object({
  name: Joi.string().required()
});

const getRoleSchema = Joi.object({
  id: Joi.string().uuid().required(),
  name: Joi.string().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required()
}).unknown(true);

const getAllRolesSchema = Joi.array().items(getRoleSchema);

router.get('/',validator.response(getAllRolesSchema), controller.getRoles)
router.get('/:id',validator.response(getRoleSchema), controller.getRole)
router.post('/',validator.body(registerRoleSchema), controller.createRole)
router.patch('/:id',validator.body(updateRoleSchema), controller.updateRole)
router.delete('/:id', controller.deleteRole)

module.exports = router;