const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
const morgan=require('morgan')
const bodyparser=require('body-parser');
const connectDB=require('./server/database/connection');
dotenv.config(
    {
        path:'.env'
    }
)
const PORT=process.env.PORT||7000
//log req

app.use(morgan("tiny"));
//connect DB
connectDB();

//body-parser

app.use(bodyparser.urlencoded({extended:true}))
//set view engine


app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"views/ejs"))


//load assets


app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


//load routers
app.use('/', require('./server/routes/router'));



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});