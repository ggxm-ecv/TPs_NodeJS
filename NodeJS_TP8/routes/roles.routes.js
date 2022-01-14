const express = require('express');
const router = express.Router();

const {
  createRole,
  updateRole,
  deleteRole,
  getOneRole,
  getManyRoles,
} = require('../handlers/roles.handler.js');

const validator = require('express-joi-validation').createValidator({
  passError: true
});

const Joi = require('joi');

const mySchema = Joi.object({
  name: Joi.required(),
});

router.post('/', validator.body(mySchema), createRole);
router.patch('/:id', updateRole);
router.delete('/:id', deleteRole);
router.get('/:id', getOneRole);
router.get('/', getManyRoles);

module.exports = router;
