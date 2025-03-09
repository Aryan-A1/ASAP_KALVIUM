const express = require('express');
const connectToDb = require('./db');
const app = express()
require('dotenv').config();

const port = process.env.PORT || 9898
const uri = process.env.MONGO_URI;

app.use(express.json())

app.get('/', (req,res)=>{
    res.send("This is Home Route")
})

app.listen(port, async()=>{

    try{

        await connectToDb(uri)

        console.log(`The server is running at port: ${port}`)
        console.log("Connected successfully to Database")
    }
    catch(err){
        console.log(err)
    }
})

