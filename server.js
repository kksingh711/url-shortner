const express =require('express')
const mongoose=require("mongoose");
const app=express();
const shortid=require('shortid');
const shorturl = require('./models/shorturl');
mongoose.connect('mongodb://localhost/urlshort',{
    useNewUrlParser:true,useUnifiedTopology:true
})
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.render('index');
});
app.post("/shorturl",async (req,res)=>{
    await shorturl.create({full: req.body.fullurl});
    res.redirect("/");
})
app.listen(process.env.PORT || 3000);