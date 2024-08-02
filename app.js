const express=require('express');
const mongoose=require('mongoose');
require('dotenv/config')

const routes=require('./routes')

const app=express();//creating an express app

//use middleware
app.use('/api',routes)

//app.use(express.json())
app.get('/',(req,res)=>{

})

//CONNECT TO THE DATABASE
mongoose.connect (process.env.MONGODBLINK)
  //parsing error
.then(() =>{
  console.log('connected to the DB');
})
.catch(err=>{
  console.log ('Error coonecting to the DB',err);
})


app.listen(process.env.PORT,()=>{console.log(`connected on port ${process.env.PORT}`)})