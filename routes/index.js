// routes
const {Router}= require('express')
const router= Router()

router.get('/',(req,res)=>{
    const data= {
        "Name" : "Fazt",
        "website" : "fastweb.com"
    }
    res.json(data)
})

module.exports= router;






