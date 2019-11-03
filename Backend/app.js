var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var {sendMessage} = require('./routes/twilio')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var {router:locationRouter} = require('./routes/location');
var {router:personRouter} = require('./routes/person');

app.get('/', (req, res) => res.send('Disaster Recovery App is on Azure!'))
app.use('/location', locationRouter);
app.use('/person', personRouter);

const numbers = ['+18325334573']

app.get('/safetext', (req,res) => {
  numbers.forEach(element => {
    sendMessage(element,'Mark Smith is safe').then(message => console.log(message)).done();
  });
  res.send({message:'success'})
})

app.get('/unsafetext', (req,res) => {
  numbers.forEach(element => {
    sendMessage(element,'yourmom').then(message => console.log(message)).done();
  });
  res.send({message:'success'})
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
