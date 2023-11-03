const { ObjectId } = require('mongodb')
const Model = require('../Models/model')

const model = new Model('users');
let userController = {
    async findAll(req, res) {
        model.find()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message
                });
            });
    },
    async findOne(req, res) {
        let condition = {
            _id: new ObjectId(req.params.id)  //here _id is coming as string from the params so we need to change from string to the objectId
        }
        model.findOne(condition)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message
                });
            });
    },
    create(req, res) {
        let data = {
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            phone: req.body.phone,
            address: {
                doorNo: req.body.address.doorNo,
                street: req.body.address.street,
                area: req.body.address.area,
                city: req.body.address.city,
                state: req.body.address.state,
                country: req.body.address.country,
                zipcode: req.body.address.zipcode
            }
        }
        model.create(data)
            .then(data => {
                res.send(data)
            })
            .catch(error => {
                res.status(500).send({
                    message: error.message
                });
            });
    },
    update(req, res) {
        let id = req.body._id
        let data = {
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            phone: req.body.phone,
            address: {
                doorNo: req.body.address.doorNo,
                street: req.body.address.street,
                area: req.body.address.area,
                city: req.body.address.city,
                state: req.body.address.state,
                country: req.body.address.country,
                zipcode: req.body.address.zipcode
            }
        }
        model.update(id, data)
            .then(data => {
                res.send(data)
            })
            .catch(error => {
                res.status(500).send({
                    message: error.message
                });
            });
    },
    deleteOne(req, res) {
        let id = new ObjectId(req.params.id)

        model.deleteOne(id)
            .then(data => {
                res.send(data)
            })
            .catch(error => {
                res.status(500).send({
                    message: error.message
                });
            });
    }

}
module.exports = userController;