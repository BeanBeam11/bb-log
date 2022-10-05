const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Post = require('./models/postModel');

dotenv.config();

const app = express();

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection successful!'));

app.use(cors());
app.use(express.json());

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

app.get('/api/v1/posts', async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json({
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

app.get('/api/v1/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
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
