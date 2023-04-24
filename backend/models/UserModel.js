import mongoose from "mongoose";

const User = mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  insta: {
    type: String,
  },
  twitter: {
    type: String,
  },
  fb: {
    type: String,
  },
 gender: {
    type: String,
  },
  aadhaar: {
    type: String,
  },  
  occupation: {
    type: String,
  },
  uid: {
    type: String,
  },
});

export default mongoose.model("Users", User);
