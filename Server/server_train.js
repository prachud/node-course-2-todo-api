
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


var users=mongoose.model('users',{
    email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
    }
});

var newUser= new users({
    email:'abc@xyz.com'
});

newUser.save().then((resl)=>{
console.log('User save',resl);
},(e)=>{
console.log('Unable to user',e);
});

/* var Todo = mongoose.model('Todo',{
    text:{
    type:String,
    required:true,
    trim:true,
    minlength:1   
},
    completed:{
    type:Boolean,
    default:false    
},
    completedAt:{
    type:Number,
    default:null
    }
});

var todoNew= new Todo({
    //text:'Have dinner'
  //  text:' call Right Horizons   '
   completed: false
 });

todoNew.save().then((resl)=>{
console.log(JSON.stringify(resl,undefined,2));
},(e)=>{
    console.log('Unable to insert the data',e);
}); */