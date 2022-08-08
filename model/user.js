import { Timestamp } from "mongodb"
import mongoose from "mongoose"



const remainders=new mongoose.Schema({
 time:String,
  date:String,
  medicine:String,
  description:String,

  

})




  
// Defining Schema
const userSchema = new mongoose.Schema({
  
  username:{type:String,required:true, trim:true},
  password:{type:String,required:true, trim:true},
  firstname:{type:String,required:true, trim:true},
  lastname:{type:String,required:true, trim:true},
  email:{type:String,required:true,trim:true,unique:true},
  remainder:[remainders]




}

)

// Model 
const userModel = mongoose.model("users", userSchema)

export default userModel