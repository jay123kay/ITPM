const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const bookingRoutes = require('./routes/bookings');
const paymentRoutes = require('./routes/payments');
const loginRoutes = require('./routes/logins');



//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(bookingRoutes);
app.use(paymentRoutes);
app.use(loginRoutes);



const PORT = 8000;
const DB_URL ='mongodb+srv://Kavya:itpm@itpm.8d8uh.mongodb.net/ITPM?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true

})
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error', err))

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});