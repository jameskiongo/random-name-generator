const express = require("express");
const data = require("./MOCK_DATA.json");

const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use('/random-name', (req,res)=>{
    const{first_name} = data[Math.round(Math.random()*data.length)];
    const{last_name} = data[Math.round(Math.random()*data.length)];
    return res.json({first_name, last_name});
})
app.use("/", (req,res)=>{
    return res.render("index");
})

app.listen(3000, (req,res)=>{
    console.log("app listening");
});