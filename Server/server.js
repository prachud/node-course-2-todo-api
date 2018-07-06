
var express=require('express');
var bodyPraser=require('body-parser');
var {ObjectID}=require('mongodb');

const port=process.env.PORT || 3000;
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

//challenge
//GET TODO
 app.post('/todos:id',(req,res)=>{
     var id=req.params.id;
     //valid  id using isValidID
     console.log(id);
     if (!ObjectID.isValid(id)){
     console.log('Not a Valid Id number');
     return res.status(404).send;
    }
     //findBYId
     Todo.findById(id).then((doc)=>{
         //if no todo send back 404 with empty body
          console.log('Todo by Find By iD is ',doc);
          if (!doc){
              return res.status(404).send(doc);
          }
           //success send todo back
         res.send({doc});
     },(e)=>{
          //400-and send empty body back
        res.status(400).send(e);
     });
            
 })

app.listen(port,()=>{
console.log(`Listening on port 3000 ${port}`);
});
