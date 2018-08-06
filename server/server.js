const express = require('express');

let app=express();

app.set('PORT', 2002);

app.get('/',(req,res)=>{
  res.status(300).send({msg:"hello express!!!",err:"error"});
})

app.get('/User',(req,res)=>{
  res.status(200).send([{name:"a",age:"12"},{name:"b",age:"23"},{name:"tanuj",age:"25"}]);
})

app.listen(app.get('PORT'),()=>{
  console.log(`Listening on port ${app.get('PORT')}`);
})

module.exports.app = app;
