const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const obj = {}
  obj.items = [
    {
      "id": 1,
      "name": "Kirill"
    },
    {
      "id": 2,
      "name": "Grigory"
    }
  ]
  res.send(obj);
});


router.post('/', function(req, res, next) {
  newUser = {id: req.params.id, name: req.body.name};
  res.status(201).json(newUser);
})

module.exports = router;
