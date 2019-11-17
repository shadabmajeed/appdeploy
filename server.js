const express=require('express')

const app=express()
PORT=process.env.port||3000
app.listen(PORT,()=>{console.log('http://localhost:3000')})

app.get('/',(req,res)=>{res.send('hello this is a sample app')})
app.get('/hi',(req,res)=>{
 res.send('hello    '+req.query.name)

})
app.get('/bye',(req,res)=>{
    res.send('goodbye  '+req.query.name)
   
})