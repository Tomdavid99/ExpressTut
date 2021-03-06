const express = require('express');
const app = express();
const path = require('path');
const member = require('./Members.js');

const logger = require('./middleware/logger')

app.use(logger);

app.get('/api/members',(req, res)=>{
    res.json(members);
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening to PORT ${PORT}`));