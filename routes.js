const express=require('express')

const router = express.Router()


//get method(all posts)
router.get('/posts',(req,res)=>{
    //res.send('Posts page')

    res.json(
        {msg:'We are the Code Queens'}
    )
});

router.get('/posts/:id',(req,res)=>{
    res.json(
        {msg:'GET a specific post'}
    )
});

module.exports=router