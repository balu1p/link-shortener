const express=require("express")
const mongoose=require("mongoose")

const route=require('./route/route')


const app = express()

app.use(express.json())



mongoose.connect("mongodb+srv://iamaditya:gbCsJkKLQc8U2oyp@cluster0.brptf5o.mongodb.net/Group-22?retryWrites=true&w=majority",{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB Connected..")
}).catch(err=>{
    console.log(err.message);
})

app.use('/',route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))})