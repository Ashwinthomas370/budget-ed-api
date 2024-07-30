const express = require('express');
const app = express();
const port = 3000;
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGODB_URI;

MongoClient.connect(url)
  .then(client => {
    console.log('Connected to Database');

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(error => console.error(error));
