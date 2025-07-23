const express = require('express')

const app = express();

app.get('/user/:userid',(req,res)=>{
    res.send(`user id = ${req.params.userid}`)
});

app.get('/search', (req,res)=>{
    const { name, age, phoneno } = req.query
    res.send(`Searching for name : ${name}  age: ${age}  phoneno: ${phoneno}`)
})





app.listen(3000,()=>{
    console.log("Server Has Started At 3000 port ")
})


