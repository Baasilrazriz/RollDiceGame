import express from "express";
import bodyParser from "body-parser";
const app=express()
app.use(express.static("public"));
const port=4000;
var image;
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index',)
})

app.listen(port,()=>
{
    console.log("running on port: "+port);
})
