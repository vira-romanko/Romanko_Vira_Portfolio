const express = require('express');
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/views'));

app.use('/', require('./routes/index.js'));
//app.use('/project1', require('./routes/index.js'));
app.use((req, res) =>{
  res.render('project1', { layout:'project1'});

});
app.use((req, res, next) =>{
  res.render('project2', { layout:'project2'});

});

app.use(express.static('public'));


app.use((req, res, next) =>{
  var err = new Error('Not Found');
  err.status = 404;
  err.message = "Thanks. You just broke it all!"

  next(err);

})

app.use((err, req, res, next) =>{
  res.render('error', {error: err, layout:'errorPage'});
})

app.listen(port, ()=>{
  console.log(`app is runng on ${port}`);
})

