const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskContoller');

router.post('/', TaskController.create);

module.exports = router;