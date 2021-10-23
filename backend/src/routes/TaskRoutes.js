const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskContoller');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/filter/all/:macadress', TaskController.all);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);
router.get('/filter/late/:macadress', TaskController.late);
router.get('/filter/today/:macadress', TaskController.today);
router.get('/filter/week/:macadress', TaskController.week);
router.get('/filter/month/:macadress', TaskController.month);
router.get('/filter/year/:macadress', TaskController.year);

module.exports = router;