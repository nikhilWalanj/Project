const express = require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogRoutes')

// express app
const app = express();

// connect to mongodb
const dbURI='mongodb+srv://netninja:test1234@nodetuts.vcshlua.mongodb.net/node-tuts?retryWrites=true&w=majority'
// mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedToplogy:true})
mongoose.connect(dbURI)
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err))

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.use(express.static('./public'));

app.use(express.urlencoded({extended:true}))

app.use(morgan('dev'));

//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
//   const blog=new Blog({
//     title:'new blog2',
//     snippet:'about my new blog',
//     body:'more about my new blog'
//   });

//   blog.save()
//   .then(result=>{
//     res.send(result)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// })

// app.get('/all-blogs',(req,res)=>{
//   Blog.find()
//   .then((result)=>{
//     res.send(result);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//   })

//   app.get('/single-blog',(req,res)=>{
//     Blog.findById('65b7e15c45d4264eeaafea60')
//     .then((result)=>{
//       res.send(result);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   })

app.get('/', (req, res) => {
 res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs',blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});