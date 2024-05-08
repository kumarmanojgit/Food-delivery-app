const mongoose=require('mongoose');


const mongodbUrl=`mongodb+srv://kumarmanoj896940:hU1QsnVcl01pYjCL@cluster0.vha15ww.mongodb.net/kumarmanoj896940?retryWrites=true&w=majority&appName=Cluster0`

async function connectdb(){
  return mongoose.connect(mongodbUrl)
}
module.exports=connectdb;