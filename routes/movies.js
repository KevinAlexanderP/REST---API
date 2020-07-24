const {Router} = require('express');
const router = Router();

const moviesdb = require('../samples.json')
console.log(moviesdb)

router.get('/',(req,res)=>{
res.send(moviesdb)
});

// router.post('/'())

router.post('/',(req,res)=>{
    const{title, director, year , rating }= (req.body)
    if(title && director && year && rating){
        
        res.json('saved')
    }else{
        res.send('received')
    }
    
    });


module.exports = router;