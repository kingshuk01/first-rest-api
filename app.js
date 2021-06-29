const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
// app.use('/posts', ()=>{
//     console.log("middelware");
// });


//import routes
const postsRoute = require('./routes/posts');

app.use('/post', postsRoute);


//routes



//conect to   db

mongoose.connect(process.env.DB_CONNECTION,
{useUNewUrlParser:true}, 

()=>console.log("connected to db"));



//listen
app.listen(3000);