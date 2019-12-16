var express = require('express');
var router = express.Router();


const sql = require('../utils/sql');



router.get('/', (req,res)=>{
  console.log("at the main route");
 let query = "Select ID, image, name FROM tbl_projects";
 sql.query(query, (err,result)=>{
     console.log("getting data")
     if (err){
         throw err;
         console.log(err);
     }
     console.log(result);
    
    res.render('home' , {portfolio:result});
    
    
 })
})



router.get('/portfolio/:id', (req, res)=> {
  console.log("hit a dynamic route");
  console.log(req.params.id);

  //here is where we set up query
  let query =`SELECT * FROM tbl_projects WHERE ID="${req.params.id}"`;
  sql.query(query, (err, result)=>{
    console.log('getting data');
    if (err) console.log(err);//somthing done broke!

     
    console.log(result);//send that row back to the calling function
    res.json(result[0]);
    
 })
 
})

module.exports = router;

