const path = require('path');
const express = require('express');
const cors = require('cors');
const config = require('./app');

const corsOptions = {
    origin: config.clientURL || '*',
    optionsSuccessStatus: 200,
  };

  module.exports = (app) => { 
    app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get('/', (req, res) => res.send('API running'));
};
