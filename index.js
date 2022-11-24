const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=2004

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
app.get("/",(req,res)=>{
	res.send("hi this is usha sri")
})
app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const{name,age}=req.body
	console.log(name,age,"values")
})
app.listen(port,()=>console.log("server started in post"))