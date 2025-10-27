//we discuss first express framework, then server creation, routing, middleware, error handling
const express= require('express');
//import express from 'express'

const app = express();
//middleware-> its a function that runs between request and response
//why need middileware-> for logging, authentication, error handling , etc
app.use("/", function(req, res, next){
    console.log("this is middleware");
    next();
});
//routes creation
//app.get(route, callback(function (req, res) {}))
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/about', (req, res, next) => {
  //res.send('This is about page');
  return next(new Error('This is a forced error.'));
})  
//error handling middleware...always put at last
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
//server listening
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});