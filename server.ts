import app from "./src/app.js"

app.listen(3000, ()=>{
    console.log("server is running!");  
})

app.get("/",(req, res)=>{
    res.send("everything is working")
})