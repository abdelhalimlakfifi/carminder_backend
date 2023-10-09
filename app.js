const express = require('express');
const app = express();
const connectDb = require('./config/db')

//load and configure dotenv package
require('dotenv').config();

//Set the port env variable
const port = 4500;


// Connect to MongoDB
connectDb();

//Required middleware functions to handle common functionalities
const bodyParser = require('body-parser');
const cors = require('cors');


//Middlewares
app.use(bodyParser.json());
app.use(cors());


// //Route for admin related operations
// const adminRoutes = require('./routes/adminRoutes');
// app.use('/admin', adminRoutes);

// //Route for Client Related operations
// const clientRoutes = require('./routes/clientRoutes');
// app.use('/client', clientRoutes);




//Start the Express server and listen on the specified port.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});