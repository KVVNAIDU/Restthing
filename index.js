const express = require("express");

const port = 8000;

const app = express();

app.listen(port,(err)=>{
    if(err){
        console.log("something",err);
    }
    console.log("rendering");
});