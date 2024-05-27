const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');

const app = express();

app.use(cors());

require('dotenv').config();
require('./db')
const PORT = 4000;
app.use(bodyParser.json());
app.use('/users', userRoutes );

//Path : index.js
app.get('/', (req,res)=>{
    res.json({
        message : 'Task Manager API is working'
    })
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});