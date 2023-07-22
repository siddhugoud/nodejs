const express=require('express')
const router=express.Router()


router.get('/add-products',(req,res,next)=>{
    res.send('<form><input type="text" name="title"><button type="submit">Add product</button></form>')
})
router.post('/product',(req,res,next)=>{

})

module.exports=router
