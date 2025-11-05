require ('dotenv').config();
const express = require('express');
const mongoose = require ('mongoose');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.get ('/', (req, res) => {
    res.send ({status : 'ok' , message : 'student Project Tracker backend Running'});
});

if (!MONGO_URI) {
    console.error ('MONGO_URI is not defined in environment variables');
    process.exit (1);
}

mongoose  .connect (MONGO_URI, { useNewUrlParser : true, useUnifiedTopology : true })
          .then (() => {
              console.log ('Connected to MongoDB');
              app.listen (PORT, () => {
                  console.log (`Server is running on port ${PORT}`);
              });
          })
          .catch ((err) => {
              console.error ('Failed to connect to MongoDB', err);
              process.exit (1);
          });