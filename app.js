var express = require('express'); //package for implemeneting the web server 
var path = require('path'); //package for declaring the path of the views
var app = express(); // this app variable is just our server and is to be used everytime we need to add something
const session = require('express-session');
//app.use(session({secret: 'eskot'}));
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT || 3000;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(cookieParser());

var sess;
var flag = false;

app.get('/', function(req,res){
  if (flag){
    res.render('login', {accept:'registered successfully'})
    flag = false;
  } else
    res.render('login',{accept:''});
});

app.get('/annapurna', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('annapurna', {error: ""});
  }
  else {

      res.redirect('/')


  }
});

app.get('/bali', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('bali', {error: ""});
  }
  else {

      res.redirect('/')


  }
});

app.get('/cities', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('cities', {error: ""});
  }
  else {

      res.redirect('/')


  }
});

app.get('/hiking', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('hiking', {error: ""});
  }
  else {

      res.redirect('/')


  }
});

app.get('/home', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('home', {error: ""});
  }
  else {

      res.redirect('/')


  }
});

app.get('/inca', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('inca', {error: ""});
  }
  else {

      res.redirect('/')


  }
});

app.get('/index', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('index', {error: ""});
  }
  else {

      res.redirect('/')


  }
});

app.get('/islands', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('islands', {error: ""});
  }
  else {

      res.redirect('/')


  }
});

app.get('/paris', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('paris', {error: ""});
  }
  else {

      res.redirect('/')


  }
})

app.get('/registration', function(req,res){
  res.render('registration', {error: ""}) 
});

app.get('/rome', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('rome', {error: ""});
  }
  else {
      res.redirect('/')
  }
});

app.get('/santorini', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('santorini', {error: ""});
  }
  else {

      res.redirect('/')


  }
});

app.get('/searchresults', function(req,res){
  sess = req.session
  if (sess && sess.username!=undefined ){
    res.render('searchresults', {error: ""});
  }
  else {

      res.redirect('/')


  }
});

//var MongoClient = require('mongodb').MongoClient;


  //var db = client.db('myDB');

  app.get('/wanttogo', async function(req,res){  
    sess = req.session
    if (sess && sess.username != undefined) {
      var places = []
      res.render('wanttogo', { list: places });
    }
    else {
      res.redirect('/')
    }
  });
 
  app.post('/register', async function(req,res){
    var x = req.body.username;
    var y = req.body.password;

   
  //     var test = await db.collection('myCollection').findOne({username: x})
      if (x===''||y===''){
        
        res.render('registration', {error: " username or password required please!"})
      }
      //else if(test){  
        //res.render('registration', {error: "Username already exist"}) 
      //}
       else{
      //db.collection('myCollection').insertOne({username: x,password: y });
      flag = true;
      res.redirect('/');
      //res.render('login', {accept: " Registered Successfully"} )
     
      
      }

  });

app.post('/', async function (req, res) {
  var x = req.body.username;
  var y = req.body.password;

  if (x == 'admin' && y == 'admin') {
    res.redirect('home')

    sess = req.session;
    sess.username = x;
    sess.password = y;
    sess.save();
    // } else {
    // var test = await db.collection('myCollection').findOne({username: x, password:y})
    //   if (x===''||y===''){ 

    //     res.render('login', {accept: " username or password required please!"})
    //   }
    //   else if(test){
    //     res.render('home') 

    //     sess=req.session;
    //     sess.username=x;
    //     sess.password=y;
    //     sess.save();
  }
  else {
    res.render('login', { accept: " Username or password is not correct" })
  }
});

app.post('/paris', async function (req, res) {
  sess = req.session
  if (sess && sess.username != undefined) {
    //var test = await db.collection('myCollection').findOne({UserID: sess.username, Place: "paris"})
    //if(!test){
    //db.collection('myCollection').insertOne({UserID: sess.username, Place: "paris"});
    res.render('paris', { error: " Added successfully" });
    //}else{
    //res.render('paris', {error: " Already in the WishList"});
    //}
  }
  else {

    res.redirect('/')


  }
})

app.post('/rome', async function (req, res) {
  sess = req.session
  if (sess && sess.username != undefined) {
    //var test = await db.collection('myCollection').findOne({UserID: sess.username, Place: "rome"})
    //if(!test){
    //db.collection('myCollection').insertOne({UserID: sess.username, Place: "rome"});
    res.render('rome', { error: " Added successfully" });
    //}else{
    //res.render('rome', {error: " Already in the WishList"});

    //}
  }
  else {

    res.redirect('/')

  }
});

app.post('/inca', async function (req, res) {
  sess = req.session
  if (sess && sess.username != undefined) {
    //   var test = await db.collection('myCollection').findOne({UserID: sess.username, Place: "inca"})
    //   if(!test){
    //   db.collection('myCollection').insertOne({UserID: sess.username, Place: "inca"});
    res.render('inca', { error: " Added successfully" });
    //   } else {
    //     res.render('inca', {error: " Already in the WishList"});
    //   }
  }
  else {

    res.redirect('/')


  }
})

app.post('/santorini', async function (req, res) {
  sess = req.session
  if (sess && sess.username != undefined) {
    //   var test = await db.collection('myCollection').findOne({UserID: sess.username, Place: "santorini"})
    //   if(!test){
    //   db.collection('myCollection').insertOne({UserID: sess.username, Place: "santorini"});
    res.render('santorini', { error: " Added successfully" });
    //   }else{
    //     res.render('santorini', {error: " Already in the WishList"});
    //   }
  }
  else {

    res.redirect('/')


  }
})

app.post('/bali', async function (req, res) {
  sess = req.session
  if (sess && sess.username != undefined) {
    //   var test = await db.collection('myCollection').findOne({UserID: sess.username, Place: "bali"})
    //   if(!test){
    //   db.collection('myCollection').insertOne({UserID: sess.username, Place: "bali"});
    res.render('bali', { error: " Added successfully" });
    //   }else{
    //     res.render('bali', {error: " Already in the WishList"});
    //   } 
  }
  else {

    res.redirect('/')


  }
})

app.post('/annapurna', async function (req, res) {
  sess = req.session
  if (sess && sess.username != undefined) {
    // var test = await db.collection('myCollection').findOne({UserID: sess.username, Place: "annapurna"})
    // if(!test){
    // db.collection('myCollection').insertOne({UserID: sess.username, Place: "annapurna"});
    res.render('annapurna', { error: " Added successfully" });
    // } else {
    //   res.render('annapurna', {error: " Already in the WishList"});
    // }
  }
  else {

    res.redirect('/')


  }
})

  app.post('/search', async function (req, res) {
    sess = req.session
    if (sess && sess.username!=undefined ){
    var list = ["paris", "rome", "bali", "annapurna", "inca", "santorini"]
    const key = req.body.Search
    var result = []
    list.forEach((place) => {
      if (place.indexOf(key) != -1)

        result.push(place)
    })
    if (result.length == 0)
      res.render('searchresults', { error: "Not found" , list : result});
    else
      res.render('searchresults', { error: "", list: result });
    }
    else {
  
        res.redirect('/')
  
  
    }
  })




app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});