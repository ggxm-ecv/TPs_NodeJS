const models = require("../models");
const Role = models.Role;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getRoles: (req, res) => {
        Role.findAll()
        .then(data => {
            res.status(302).json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Roles."
            });
        });
    },
    getRole: (req, res) => {
        const id = req.params.id;
        Role.findByPk(id)
        .then(data => {
            if(data){
                res.status(302).json(data);
            }else{
                res.status(404).send({
                    message: "Role not found !"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Roles."
            });
        });
    },
    createRole: (req, res) => {
        if(!req.body.name){
            res.status(400).send({
                message: "Fields can not be empty!"
            });
        }
        const role = {
            id: uuidv4(),
            name: req.body.name,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        Role.create(role)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while creating the Tutorial."
                });
            });
    },
    updateRole: (req, res) => {
        const id = req.params.id;
        if(!id){
            res.status(400).send({
                message: "ID can not be empty!"
            });
        }
        Role.update(req.body, {
            where: {id: id}
        }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while updating the Role."
            });
        });        
    },
    deleteRole: (req, res) => {
        const id = req.params.id;
        Role.destroy({where: { id: id }})
            .then(data => {
                if(data === 1){
                    res.status(202).send({
                        message: "Role deleted !"
                    });
                }else{
                    res.status(404).send({
                        message: `Role not found !`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while retrieving Roles."
                });
            });    
    }
}