const{ObjectID}=require('mongodb');

const {mongoose} = require('./../db/mongoose');
const {Todo} =require('./../db/models/todo');
const {User}=require('./../db/models/user');

var id='5b3a5a0c50c59b13c4c48164';

User.findById(id).then((user)=>{
    if(!user){
        return console.log('User email do not exist');
    }
    console.log(JSON.stringify(user,undefined,2));       
}).catch((e)=>{
    console.log(e);
});

/* if(!ObjectID.isValid(id)){
    console.log(`Inavlid ID`)
}; */

/* Todo.find({
    _id:id
}).then((todos)=>{   
    console.log(`Todos by find`,todos);       
});

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log('Todo by findOne',todo);
});
 */
/* Todo.findById(id).then((todo)=>{
if(!todo)  {
    return console.log(`Id do not exist`);
}
    console.log('Todo by ID',todo);
}).catch((e)=>{
    console.log(e);
}); */