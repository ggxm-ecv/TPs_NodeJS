const { User, Post } = require('../models');
const createError = require('http-errors');

const createUser = async (req, res, next) => {

  return next(createError(404));

  const { firstname, lastname, email, github_url } = req.body;
  const user = await User.create({
    firstname,
    lastname,
    email,
    github_url
  });

  return res.json(user);
}

const updateUser = async (req, res) => {

  const updateSuccess = await User.update({
    ...req.body
  }, {
    where: {
      id: req.params.id
    }
  });

  if(updateSuccess) {

    const user = await User.findByPk(req.params.id);
    return res.json(user);

  } else {
    res
    .status(500)
    .json({
      status: 500,
      message: 'Server error',
    });
  }

}

const deleteUser = async (req, res) => {

  const deleteSuccess = await User.destroy({
    where: {
      id: req.params.id
    }
  });

  if(deleteSuccess) {

    return res.status(204).json();

  } else {
    res
    .status(500)
    .json({
      status: 500,
      message: 'Server error',
    });
  }

}

const getOneUser = async (req, res, next) => {
  let user = null;

  if(req.query.displayPosts) {
    user = await User.findByPk(req.params.id, {
      include: {
        model: Post
      }
    });
  } else {
    user = await User.findByPk(req.params.id);
  }

  if(!user) {
    return next(createError(404));
  }

  return res.json(user);
}

const getManyUsers = async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  getManyUsers,
}
