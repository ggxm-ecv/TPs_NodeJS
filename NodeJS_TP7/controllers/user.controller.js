const models = require("../models");
const User = models.User;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getUsers: (req, res) => {
        User.findAll({
            include: [models.Role],
        })
        .then(data => {
            res.status(302).json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Users."
            });
        });
    },
    getUser: (req, res) => {
        const id = req.params.id;
        let includeAssociation = [models.Role];
        if(req.query.posts){
            includeAssociation.push(models.Post)
        }
        User.findByPk(id, {
            include: includeAssociation
        })
        .then(data => {
            if(data){
                res.status(302).json(data);
            }else{
                res.status(404).send({
                    message: "User not found !"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving User."
            });
        });
    },
    createUser: (req, res) => {
        if(!req.body.lastname || !req.body.firstname || !req.body.email){
            res.status(400).send({
                message: "Fields can not be empty!"
            });
        }
        const user = {
            id: uuidv4(),
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            email: req.body.email,
            username: req.body.username,
            githubUrl: req.body.githubUrl,
            role_id: req.body.role_id
        };
        User.create(user)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while creating the User."
                });
            });
    },
    updateUser: (req, res) => {
        const id = req.params.id;
        if(!id){
            res.status(400).send({
                message: "ID can not be empty!"
            });
        }
        User.update(req.body, {
            where: {id: id}
        }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while updating the User."
            });
        });        
    },
    deleteUser: (req, res) => {
        const id = req.params.id;
        User.destroy({where: { id: id }})
            .then(data => {
                if(data === 1){
                    res.status(202).send({
                        message: "User deleted !"
                    });
                }else{
                    res.status(404).send({
                        message: `User not found !`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while deleting User."
                });
            });    
    }
}