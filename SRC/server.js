//import module
const {app}=require(".");
const connectDB = require("./config/db.js");


const port=5454;
app.listen(port,async()=>{
  await connectDB();
  console.log(`server is running on port ${port}`);
});