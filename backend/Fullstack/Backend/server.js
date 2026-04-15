const express = require('express')
const cors = require('cors')

const app = express()

//Middleware 
app.use(express.json())
app.use(cors())  //Enable Cors

//Route - API 

app.post('/register' , (req,res)=>{

const {name , email , password} = req.body

console.log('User Register ' , {name,  email})

//response From Backned
res.json({ message: `Weclome , ${name} You Account has been registerd `       })

})

app.listen(3000 , ()=>{
    console.log('Server Running http://localhost:3000')
})