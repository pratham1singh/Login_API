const express= require('express')
const cors = require('cors')
const data =require('./db.json')
var app= express()
app.use(cors())

app.get('/',(req,res)=>{
    res.send(JSON.stringify(data))
})

app.listen(process.env.PORT||3000)