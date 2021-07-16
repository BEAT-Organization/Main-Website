const cors = require('cors');
const mongoose = require('mongoose');
const createError = require('http-errors')
const express = require('express');
const logger = require('morgan')

const Article = require('./models/article.js');
const Contact = require('./models/contact.js');
require('dotenv').config()


//import indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

//app.use('/', indexRouter);

//connect to mongodb


mongoose.connect(dbURI, { useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


// catch 404 and forward to error handler


//const CONNECTION_URL = '';
//const PORT = process.env.PORT|| 5000;

//app.listen(PORT,(() => console.log(`Server Running on Port: http://localhost:${PORT}`)));

/*mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));*/

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//register to view engine
//app.set('view engine', 'ejs');
//app.use(express.json());


app.get('/magazine/', (req, res) => {

  console.log('Awesome!');
    res.sendFile(__dirname + "/Beat test.docx");

});

app.post('/contactUs', (req, res) => {

  const contact = new Contact(req.body); 

  contact.save()
   .catch((err) => {
       console.log(err);
   })

  console.log(req.body);


});

app.get('/article/', (req, res) => {
  Article.find()
   .then((result) => {
       
       res.render('index', { Article : result });
      
   })
   .catch((err) => {
       console.log(err);
   })
})
