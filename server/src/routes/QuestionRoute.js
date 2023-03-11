const express = require('express');
const QuestionController = require('../controller/QuestionController');
const router = express.Router(); // New router instance from express library

router.get('/', QuestionController.question.get);
router.post('/result', QuestionController.question.resultPost);


module.exports = router
