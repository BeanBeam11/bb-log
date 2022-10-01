const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/v1/posts', (req, res) => {
    res.json({
        status: 'success',
        data: {
            data: req.body,
        },
    });
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});
