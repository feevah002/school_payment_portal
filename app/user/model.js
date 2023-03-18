const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    department:{
      type:mongoose.Schema.Types.ObjectId,
      required:true
    },
    tuition:{
      tuitionId: {
        type:mongoose.Schema.Types.ObjectId,
        required:true
      },
      paid:{
        type: Boolean,
        required:true, 
        default: false
      }
    },
    studentDues:[{
      duesId: {
        type:mongoose.Schema.Types.ObjectId,
        required:true, 
      },
      paid:{
        type: Boolean, 
        default: false,
        required:true, 
      }
    }],
    
  },{
      timestamps:true
    }
)

UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', UserSchema)

module.exports = User