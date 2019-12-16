var express = require('express');
var router = express.Router();


const connect = require('../utils/sql');



router.get('/', (req,res)=>{
  //console.log("at the main route");
  connect.getConnection((err, connection) => {
    if (err){
      return 
      console.log(error.message);
  }
 let query = "Select ID, image, name FROM tbl_projects";
 connect.query(query, (err,result)=>{
     console.log("getting data")
     if (err){
         throw err;
         console.log(err);
     }
     //console.log(result);
    
    res.render('home' , {portfolio:result});
    
    }); 
 });
})



router.get('/users/:id', (req, res)=> {
  console.log("hit a dynamic route");
  console.log(req.params.id);

  //here is where we set up query
  let query =`SELECT * FROM tbl_projects WHERE ID="${req.params.id}"`;
  connect.query(query, (err, result)=>{
    connection.release();
    //console.log('getting data');
    if (err) console.log(err);//somthing done broke!

    result[0].tags = result[0].tags.split(',').map(function(item) {
      item = item.trim(); //remove the extra spaces from each word

      return item;
   });
 //console.log('after split: ', result[0]);
     
    //console.log(result);//send that row back to the calling function
    //return(result);
  res.json(result[0]);
    
 })
 
})

module.exports = router;

