const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/postModel');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bb-log');

app.post('/api/v1/posts', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                data: post,
            },
        });
    } catch (err) {
        console.log(err);
        res.json({
            status: 'error',
        });
    }
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});
