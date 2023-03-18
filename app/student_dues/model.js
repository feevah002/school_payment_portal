const mongoose = require('mongoose')

const DuesSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required:true,
      unique:true //dues title must be unique
    },
    amount:{
      type:Number,
      required:true
    },
    bank:{
      type:String,
      required:true
    },
    account_number:{
      type:Number,
      required:true
    },
    department_to_pay:[
      {
        deptId:{
          type:mongoose.Schema.Types.ObjectId,
          unique:true,
        }
      }
    ],
  },{
    timestamps:true
  }
)

module.exports = mongoose.model('Dues', DuesSchema)