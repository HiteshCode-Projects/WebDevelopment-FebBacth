const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const User = require('./models/User')


//Create a Express Application - express()
const app = express()


//MiddleWare - Security Layer
app.use(cors())    //Enalble The Cors
app.use(bodyParser.json())

//Logic - Database Connection
mongoose.connect('mongodb://localhost:27017/authDBs')

.then(()=> console.log("MongoDB Connected") )
.catch(err=> console.log(err))

//Resgiter API

app.post('/resgiter' , async(req,res)=>{

const {name , email , password} = req.body  //req.body = frontend

//Basic Verification
if(!name || !email || !password){

    return res.json({ message:"All Fields must be completed" })
}

try{
//Save The Data in my Database Collection - Model

//Second Verification - Data is Already Store or not
const existingUser = await  User.findOne({email})

if(existingUser){

    return res.json({message : " User Already Exits  "})

}


//Finally I Will Store The data

const hashedPassword = await bcrypt.hash(password,10)

const newUser = new User({
    name , 
    email , 
    password:hashedPassword
})

await newUser.save()

res.json({message:"User Registered Succesfully"})


}catch(error){
    //Error While Saving
    res.json({message:"Error Resgistering User"})

}


})



app.listen(3000, ()=>{
    console.log("Server Started")
})
