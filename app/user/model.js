const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      trim:true
    },
    email:{
      type:String,
      required:true,
      trim:true
    },
    password:{
      type:String,
    },
    department:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"Dept"
    },
    tuition_paid:[],
    student_dues:[],
    
  },{
      timestamps:true
    }
)

UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', UserSchema)

module.exports = User