const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();

// app
const app = express();

// imports routes
const categoryRoutes = require('./routes/category');
const examRoutes = require('./routes/exams');

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cookieParser());



// routes middleware
app.use('/api', categoryRoutes);
app.use('/api', examRoutes);


const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
