const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const healthRouter = require('./routes/healthRoutes');

dotenv.config({ path: './server/.env' });

const app = express();

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection successful!'));

app.use(cors());
app.options('*', cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);
app.use('/health', healthRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
