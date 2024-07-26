const express=require('express');
const mongoose=require('mongoose');

const app=express();//creating an express app
const port=4000

app.get('/',(req,res)=>{

})

//CONNECT TO THE DATABASE
mongoose.connect ("mongodb+srv://Bridget65:momlove65@bridget.tfhzypk.mongodb.net/?retryWrites=true&w=majority&appName=Bridget",{userNewUrlParser:true})
  //parsing error
.then(() =>{
  console.log('connected to the DB');
})
.catch(err=>{
  console.log ('Error coonecting to the DB',err);
})

