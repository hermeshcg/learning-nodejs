const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const postsRoute = require('./routes/posts');

const app = express();

//Routes and things
app.use('/posts', postsRoute);

// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('connected to db');
});

// app listen

app.listen(3333);
