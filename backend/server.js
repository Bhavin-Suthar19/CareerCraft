const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI,{
    
}).then(() =>{
    console.log("Connected to mongodb atlas");
})
.catch((error) =>{
    console.error("Mongodb connection failed", error);
});

app.get('/', (req, res) =>{
    res.send('Hello from backend');
});

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
});
