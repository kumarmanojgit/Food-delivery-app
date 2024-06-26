const mongoose=require('mongoose');


const UserSChema=new mongoose.Schema({
    fullName: String,
    email: String,
    password:String,
    role: {
      type:String,
      enum:["ROLE_CUSTOMER","ROLE_RESTAURENT_OWNER"],
      default:"ROLE_CUSTOMER",
    },
    orders:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",

      },
    ],
    favorites:[{name:String, description:String, Image:[]}],
    addresses : [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Address",
 },
],
});
const User=mongoose=mongoose.model('User',UserSChema)

module.exports=Usre;