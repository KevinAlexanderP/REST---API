const {Router} = require('express');
const router = Router();

const moviesdb = require('../samples.json')
console.log(moviesdb)

router.get('/movies',(req,res)=>{
res.send(moviesdb)
});



module.exports = router;