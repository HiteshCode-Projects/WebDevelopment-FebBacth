const express    =      require('express')

//Express Application
const app =  express()

//Middleware - Security Checks 
app.use(express.json())


//Fake Database-
let books = [  
         {id:1 , title:'Harry Potter' , autor:'Robert'}  ,
         {id:2 , title:'Ikigai' , autor:'Vasihnav'}  ,
         {id:3 , title:'Clean Code' , autor:'John'}
       ]

//Route-API
//1. Get The Data of All Books
app.get('/books' , (req,res)=>{

    res.json(books)
})     

//2. Add a New Book
app.post('/newbooks' , (req,res)=>{

const newBook = {id:books.length + 1 , ...req.body}
books.push(newBook)
res.send("Book Instered Successfully")

})

//Put API


//Delete API

app.listen(3000 , ()=>{
    console.log("Server Running on port 3000 - http://localhost:3000 ")
})