const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');


// create middleware
const app=express();

// routing 
 const homeRouter=require('./routes/homeRouter');
app.use('./',homeRouter)

app.use(cors());
app.use(bodyParser.json());


//export module
module.exports={app};
