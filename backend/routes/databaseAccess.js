var express = require('express');
const router = express.Router();

var TodoItem = require('../models/TodoItem')
router.post('/add', (req, res) => {
    console.log(req.body.task);
    const testTodo = new TodoItem({
        taskText: req.body.task,
        completed: false
    });
    console.log(testTodo);
    testTodo.save()
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error);
    })
});







module.exports = router;