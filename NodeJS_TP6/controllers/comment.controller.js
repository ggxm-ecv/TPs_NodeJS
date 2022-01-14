const models = require("../models");
const Comment = models.Comment;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getComments: (req, res) => {
        Comment.findAll({
            include: [models.User],
        })
        .then(data => {
            res.status(302).json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Comments."
            });
        });
    },
    getComment: (req, res) => {
        const id = req.params.id;
        Comment.findByPk(id, {
            include: [models.User]
        })
        .then(data => {
            if(data){
                res.status(302).json(data);
            }else{
                res.status(404).send({
                    message: "Comment not found !"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Comment."
            });
        });
    },
    createComment: (req, res) => {
        if(!req.body.content || !req.body.author || !req.body.post_id){
            res.status(400).send({
                message: "Fields can not be empty!"
            });
        }
        const comment = {
            id: uuidv4(),
            content: req.body.content,
            date: req.body.date,
            author: req.body.author,
            post_id: req.body.post_id,
        };
        Comment.create(comment)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while creating the Comment."
                });
            });
    },
    updateComment: (req, res) => {
        const id = req.params.id;
        if(!id){
            res.status(400).send({
                message: "ID can not be empty!"
            });
        }
        Comment.update(req.body, {
            where: {id: id}
        }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while updating the Comment."
            });
        });        
    },
    deleteComment: (req, res) => {
        const id = req.params.id;
        Comment.destroy({where: { id: id }})
            .then(data => {
                if(data === 1){
                    res.status(202).send({
                        message: "Comment deleted !"
                    });
                }else{
                    res.status(404).send({
                        message: `Comment not found !`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while deleting Comment."
                });
            });
    }
}