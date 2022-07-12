require('dotenv').config();
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const app = express();
// db function
const connectDB= require('./db/connect')
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const filmsRtr=require('./routes/films')
app.use(cors())
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/films',filmsRtr)
 

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
      await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();