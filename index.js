require('dotenv').config()
const express = require('express')//require module syntax
// import express from 'express'//import module syntax
const app = express()//factory function to create an express application
const port = 3000//virtual port number listening for requests

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send('This is Twitter page')})
app.get("/login",(req,res)=>{
  res.send("<h2>Login Page</h1>")
})
app.get("/youtube",(req,res)=>{

  res.send("<h1>Welcome to YouTube</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
