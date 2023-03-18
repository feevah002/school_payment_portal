const mongoose = require('mongoose')

const TuitionPaySchema = new mongoose.Schema(
  {
    all_webhook_data:[{
      type:Object,
      required:true
    }],
    webhook_user_data:{
      student:{
        type:String
        // type:mongoose.Schema.Types.ObjectId,
        // required:true,
        // ref:"User"
      },
      department:{
        
        type:String,
        required:true
      },
      due_name:{
        type:String
        // type:mongoose.Schema.Types.ObjectId,
        // required:true,
        // ref:"Tuition"
      },
      amount:{
        to_be_paid:{
          type:String
          // type:mongoose.Schema.Types.ObjectId,
          // required:true,
          // ref:"Dept"
        },
        paid:{
          type:String
          // type:Number,
          // required:true,
        
        },
        complete:{
          type:String
        //   type:Boolean,
        //   required:true,
        //   default:false
        }
      },
      date:{
        type:String
        // type:Date,
      }
    }
  },{
      timestamps:true
    }
)

const TuitionPay = mongoose.model('TuitionPay', TuitionPaySchema)

module.exports = TuitionPay