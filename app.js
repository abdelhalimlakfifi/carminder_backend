const express = require('express');
const app = express();

//Set the port env variable
const port = process.env.PORT || 3000;


//Required middleware functions to handle common functionalities
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());


//Route for admin related operations
const adminRoutes = require('./routes/adminRoutes');

//Route for Client Related operations
const clientRoutes = require('./routes/clientRoutes');

app.use('/admin', adminRoutes);
app.use('/client', clientRoutes);


//Start the Express server and listen on the specified port.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});