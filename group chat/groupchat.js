

const express=require('express')
const bodyparser=require('body-parser')
const app=express()
const fs=require('fs')
app.use(bodyparser.urlencoded({extended:false}))





app.get('/',(req,res,next)=>{
    fs.readFile("chat.txt",(err,data)=>{
        if(err){
            data="no chat exists"
        }
    

    res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" >
    <input id="message" name="message" type="text" placeholder="message">
    <input type="hidden" name="username" id="username">
    <button type="submit">send</button>
    `) 
})  
})
app.post('/',(req,res)=>{
    console.log(req.body.username)

    fs.writeFile("chat.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        err?console.log(err):res.redirect("/")
    })
})
app.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/" method=""POST><input id="username" type="text" placeholder="username" name="username"><button type="submit">login</button></form>')
    
})



app.listen(4000)