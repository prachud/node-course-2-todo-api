//const MongoClient=require('mongodb').MongoClient

const {MongoClient,ObjectID}=require('mongodb')

//Destructing the object here we can destruct object property as an a variable
/* var user ={name:'prav', age:35}
var {name}= user;
console.log(name); */
//Connect method take two arguements  first arguement is a connection string which gives address of MongoDB, second one is 
//CAll Back function which has two arguements one is error and second one is db object

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        //return is used so that control comes out of the loop ortherwise even the Connected to database will alsoe be executed
   return console.log(`Unable to connect DB`);
    }
    console.log(`Connected to Database`);
    const db=client.db('TodoApp');

    db.collection('Todos').insertOne({
        text:'Eat Lunch',
        completed:true
    },(err,result)=>{
        if (err){
            return console.log(`Unable to Insert the data`,err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    }); 

   /*  db.collection('users').insertOne({
        name:'Prav',
        age:35,
        location:'UK'
    },(err,result)=>{
        if (err){
            return console.log(`Unable to Insert the data`,err)
          }
          console.log(JSON.stringify(result.ops,undefined,2))
    }); */


    client.close();
});