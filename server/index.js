const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const postRouter = require('./routes/postRoutes');

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

app.use('/api/v1/posts', postRouter);

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});
