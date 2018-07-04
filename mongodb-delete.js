const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if (err){
        return console.log('Unable to Connect Db');
    }
console.log('Connected to MOngoDB');
const db=client.db('TodoApp');

db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
    console.log(result);
    console.log('All Deleted');
},(err)=>{
    console.log('Unable to Delete',err);
});
});