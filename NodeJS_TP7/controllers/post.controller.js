const models = require("../models");
const Post = models.Post;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getPosts: (req, res) => {
        Post.findAll({
            include: [models.User],
        })
        .then(data => {
            res.status(302).json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Posts."
            });
        });
    },
    getPost: (req, res) => {
        const id = req.params.id;
        let includeAssociation = [models.User];
        if(req.query.comments){
            includeAssociation.push(models.Comment)
        }
        Post.findByPk(id, {
            include: includeAssociation
        })
        .then(data => {
            if(data){
                res.status(302).json(data);
            }else{
                res.status(404).send({
                    message: "Post not found !"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Post."
            });
        });
    },
    createPost: (req, res) => {
        if(!req.body.title || !req.body.author){
            res.status(400).send({
                message: "Fields can not be empty!"
            });
        }
        const post = {
            id: uuidv4(),
            title: req.body.title,
            content: req.body.content,
            date: req.body.date,
            author: req.body.author,
        };
        Post.create(post)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while creating the Post."
                });
            });
    },
    updatePost: (req, res) => {
        const id = req.params.id;
        if(!id){
            res.status(400).send({
                message: "ID can not be empty!"
            });
        }
        Post.update(req.body, {
            where: {id: id}
        }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while updating the Post."
            });
        });        
    },
    deletePost: (req, res) => {
        const id = req.params.id;
        Post.destroy({where: { id: id }})
            .then(data => {
                if(data === 1){
                    res.status(202).send({
                        message: "Post deleted !"
                    });
                }else{
                    res.status(404).send({
                        message: `Post not found !`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while deleting Post."
                });
            });
    }
}