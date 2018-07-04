
var express=require('express');
var bodyPraser=require('body-parser');

//using ES DESTRUCTING property  require the variable from file
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./db/models/todo');
var {User}=require('./db/models/user');


var app=express();

app.use(bodyPraser.json());

app.post('/todos',(req,res)=>{
//    console.log(req.body);
var todo=new Todo({
    text:req.body.text
});

 todo.save().then((docs)=>{
res.send(doc);
 },(e)=>{
res.status(400).send(e);
 });
});

app.listen(3000,()=>{
console.log('Listening on port 3000');
});
