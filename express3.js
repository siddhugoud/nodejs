const express=require('express')
const bodyparser=require('body-parser')
const app=express()

app.use(bodyparser.urlencoded({extended:false}))
app.use('/add-products',(req,res,next)=>{
    res.send('<form action ="/product" method="POST"><input type=""text name="titile"><button type="submit">Add products</button></form>')
})
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')

})
app.use('/',(req,res,next)=>{
    res.send("this is home page")
})

app.listen(3500)