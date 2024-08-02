const express = require('express')
const app =express()
require('dotenv').config() 
const mongoose = require('mongoose');
const router = require('./router/page_router');


mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Veri Tabanına Bağlanıldı!'));


app.use(express.urlencoded({ extended: false }))
app.use(express.json())  
app.use(express.static('public'))


app.set('view engine', 'ejs');


app.use("/", router)


app.listen(process.env.PORT, async ()=>{
    console.log("Server başarıyla kuruldu")

})

