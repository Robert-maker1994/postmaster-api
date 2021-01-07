const express = require('express');
const { connect } = require('mongoose');
const config = require('./config/app');
const client = require('@mailchimp/mailchimp_marketing');

// DataBase Connection 
 require('./config/database');

const app = express();


// Configure express + middleware
require('./config/expess')(app);

// Routes 
require('./Routes/Routes')(app);


    app.listen(config.port,() =>
    console.log(
      'Server started on port: ',
      config.port
    )
  );
  ;


