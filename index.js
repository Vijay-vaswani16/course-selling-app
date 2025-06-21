const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { rateLimit } = require('express-rate-limit'); 
const userRoute = require('./src/routes/userRoute');
const adminRoute = require('./src/routes/adminRoute');

const limiter = rateLimit({
        windowMs: 1000,
        limit: 10000000,
        standardHeaders: true,
        legacyHeaders: false
});

app.use(limiter);

app.use(cors());
app.use(express.json());
require('dotenv').config();

mongoose.connect(process.env.mongoDB_connection_url)
.then(() => console.log('Connected to mongoDB Atlas server'))
.catch((err) => console.log('Error Connecting to mongoDB atlas server', err))

const port = process.env.port;
const adminBaseUrl = process.env.adminBaseUrl;
const userBaseUrl = process.env.userBaseUrl;

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.use(userBaseUrl, userRoute);
app.use(adminBaseUrl, adminRoute);


app.listen(port, console.log(`server is running on port: ${port}`));