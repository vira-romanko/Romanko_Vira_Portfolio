var express = require('express');
var router = express.Router();
var path = require('path');

const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log( "send back the static file");
  res.sendFile((path.join(__dirname, '../views/index.html')));
 
});

router.get('/portfoliodata/:target', (req, res)=> {
  //here is where we set up query
  let query =`SELECT * FROM stats WHERE id="${req.params.target}"`;
  sql.query(query, (err, result)=>{
    if (err) console.log(err);//somthing done broke!
    
    console.log(result);//send that row back to the calling function
    res.json(result[0]);
    //res.render('index', { data: result });
  })
});

module.exports = router;
