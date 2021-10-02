const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskContoller');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/filter/all', MacaddressValidation, TaskController.all);
router.get('/:id', TaskController.show);

module.exports = router;