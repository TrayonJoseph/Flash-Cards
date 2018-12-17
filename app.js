const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/views`))

let db

MongoClient.connect("mongodb://sandbox:sandbox1@ds139655.mlab.com:39655/tray_trivia", (err,database)=>{
    if (err) return console.log(err)
    db= database.db("tray_trivia")
    app.listen(3000, function(){
        console.log("Listening on 3000")
    })


    
})
app.get("/",(req,res)=>{
    let cursor = db.collection("trivia").find().toArray((err, results) =>{
        if (err) return console.log(err)
 res.render('index.pug')
 })
})


app.post('/flash', (req, res)=>{
    db.collection('trivia').save(req.body, (err,result)=>{
        if (err) return console.log(err)
        console.log('saved to database :)')
        res.redirect('/')
    })
    
})

$("#getIt").on("click",function(){
    app.get('/flash', (req,res)=>{
        res.render('flash.pug')
    })
})