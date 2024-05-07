//import module
const {app}=require(".");
const connectdb = require("./config/db.js");


const port=5454;
app.listen(port,async()=>{
  await connectdb();
  console.log(`server is running on port ${port}`);
});