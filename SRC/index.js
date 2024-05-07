const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');


// create middleware
const app=express();

app.use(cors());
app.use(bodyParser.json());


//export module
module.exports={app};
