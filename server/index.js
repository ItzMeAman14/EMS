const bodyParser = require('body-parser');
const express = require('express')
const cors = require('cors')
const app = express()
const User = require('./DBconnect')

app.use(bodyParser.json())
app.use(cors())

app.post('/leave-request',(req,res) => {
    console.log(req.body);
    res.json(req.body);
})

app.post("/login",async(req,res) => {
    const data = await User.find({})
    console.log(data);
    res.json({message:"Logged in Successfully"});
})

app.listen(3112,() => {
    console.log("Listening on Port: http:localhost:3112/");
})