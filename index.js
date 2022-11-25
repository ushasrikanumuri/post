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
	res.send("div alone")
})
app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const{name,password,date}=req.body
	console.log(name)
	console.log(password)
	console.log(date)
	res.send("added sucessfully")
})
app.listen(port,()=>console.log("server started in post"))