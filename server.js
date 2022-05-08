const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');
const orderRoutes = require('./routes/orders');

//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);
app.use(orderRoutes);

//route middleware
app.use(postRoutes);
app.use(orderRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://Sarangi:itpm@itpm.8d8uh.mongodb.net/ITPM?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{

    useNewUrlParser: true,          //Remove warnings
    useUnifiedTopology: true

})
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connection Error',err));


app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});