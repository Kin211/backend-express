const express = require('express');
const router = express.Router();
const obj = {}
const users = [{
    "id": 1,
    "name": "Kirill"
},
    {
        "id": 2,
        "name": "Grigory"
    }]
/* GET users listing. */
router.get('/', function (req, res, next) {
    obj.items = users
    res.send(obj);
});


router.post('/', function (req, res, next) {
    newUser = {id: req.params.id, name: req.body.name};
    users.push(newUser);
    res.status(201).json(newUser);
})

router.get('/:id', function (req, res, next) {
    const id = parseInt(req.params.id);
    let user = users.find(user => user.id === id);
    if (user !== undefined) {
        res.send(user);
    }
    res.status(404).send();
})
module.exports = router;
