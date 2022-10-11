const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.route('/').get(postController.getAllPost).post(postController.createPost);

router.route('/:id').get(postController.getPost);

router.route('/searchPost/:keyword').get(postController.searchPost);

module.exports = router;
