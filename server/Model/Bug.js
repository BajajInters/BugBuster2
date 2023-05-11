import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BugSchema = new Schema({
  moduleName : {
    type:String,
    required:true
  },
  bugTitle: {
    type: String,
    required: true,
  },
  bugDetails: {
    type: String,
    required: true,
  },
  deviceDetails: {
    type: String,
    required: true,
  },
  imageOrVideo: {
    type: [String],
    required: true,
  },
  creator: {
    type : String
  },
  status:{
    type:String,
    default:"open"
  }
},{
  timestamps:true
});

const BugModel = mongoose.model("BugModel", BugSchema);

export default BugModel;