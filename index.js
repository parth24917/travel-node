const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');

const app = express();

app.use(cors(corsOptions));

require('dotenv').config();
require('./db')
const PORT = 4000;

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200, 
    methods: "GET, PUT, PATCH, DELETE"
}
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