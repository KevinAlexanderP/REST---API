const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const moviesdb = require('../samples.json')
console.log(moviesdb)

router.get('/',(req,res)=>{
res.send(moviesdb)
});

// router.post('/'())

router.post('/',(req,res)=>{
    const id = moviesdb.length + 1;
    const{title, Director, Year }= req.body;
    const newMoview = {...req.body, id };
    if(id && title && Director && Year ){
        moviesdb.push(newMoview)
        res.json(moviesdb)
    }else{
      res.send('Wrong')
    }
    
    });

    
// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const { title, director, year, rating } = req.body;
//     if (id && title && director && year && rating) {
//         _.each(movies, (movie, i) => {
//             if (movie.id === id) {
//                 movie.title = title;
//                 movie.director = director;
//                 movie.year = year;
//                 movie.rating = rating;
//             }
//         });
//         res.json(movies);
//     } else {
//         res.status(500).json({error: 'There was an error.'});
//     }
// });

router.delete('/:id', (req, res) => {
console.log(req.params)
res.send('deleted')
});



module.exports = router;