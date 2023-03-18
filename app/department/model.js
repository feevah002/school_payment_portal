const mongoose = require('mongoose')

const DeptSchema = new mongoose.Schema(
  {
    dept_name:{
      type:String,
      required:true,
      unique:true //dues title must be unique
    },
    duration:{
      type:String,
      required:true
    },
    fees_per_semester:{
      type:Number,
      required:true
    },
    fees_per_session:{
      type:Number,
      required:true
    },
    currency:{
      type:String,
      default:"NGN",
      required:true
    },
  },{
    timestamps:true
  }
)

module.exports = mongoose.model('Dept', DeptSchema)