const express = require('express');
const config = require('./config/app');

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


