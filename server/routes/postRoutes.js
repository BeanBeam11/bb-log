const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.route('/').get(postController.getAllPost).post(postController.createPost);

router.route('/:id').get(postController.getPost);

module.exports = router;