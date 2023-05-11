import mongoose from "mongoose";

const schema = mongoose.Schema;

const UserSchema = schema({
  firstname:{
    type:String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  usertype:{
    type:String,
    required:true
  },
  mobile:{
    type:String,
    required:true
  }
},{
  timestamps:true
});

const UserModel = mongoose.model('usermodel',UserSchema);

export default UserModel;