const express =  require('express')
const mongoose = require('mongoose')


//Step 2: Create an Express application/function
const app = express()

//Database Connection - MongoDB Local Datbase
mongoose.connect('mongodb://localhost:27017/College_Admission')

.then( ()=> console.log('Connected To MongoDB') )

.catch(err=>console.log('MongoDB Connection Failed ' , err))

//2. Define Schema / Blueprint of the data which you want to store in collection
 
const studentSchema    =   mongoose.Schema({
                  
                    name: String ,
                    age:  Number , 
                    grade:String
                })


// 3. Collection = Model in mongoose
const Student =  mongoose.model("Student" , studentSchema)


//ROUTE PATH _ API : URL

//Add The Student Data To My Backend - Datbase
app.post('/add-student' , async(req,res)=>{

 const  newStudent  = new   Student(req.body)
 await  newStudent.save()

 res.send("Student Register Sucessfullly")

})

//Get The Students Details
app.get('/students' , async(req,res)=>{

const studentsData   =  await  Student.find()

res.json(studentsData)

})


//Start The server
app.listen(3000 , ()=>{
    console.log("Server Running Backend Sarted http://localhost:3000")

})
