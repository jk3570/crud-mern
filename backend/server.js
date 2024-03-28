const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

const UserModel = require('./models/UserModel.js');
const UserRoutes = require('./routes/UserRoute.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', UserRoutes);

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log( 'Connected to Database (MongoDB Atlas) & listening on Port: ', port );
    });
  })
  .catch((error) => console.log(error));

module.exports = app;
