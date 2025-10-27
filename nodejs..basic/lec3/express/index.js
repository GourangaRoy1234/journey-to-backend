const express= require('express');
//import express from 'express'

const app = express();
//routes creation
//app.get(route, callback(function (req, res) {}))
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/about', (req, res) => {
  res.send('This is about page');
})  
app.listen(3000)