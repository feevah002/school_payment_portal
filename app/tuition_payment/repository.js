const TuitionPay = require('./model')

// create a tuition
exports.save_webhook_data = async (data)=>{
  const payload = await TuitionPay.create(data)
  return data
}

// //receipts
// exports.get_dept_tuition_receipts = async (dept)=>{
//   const found = await TuitionPay.findOne({dept})
//   return found
// }


// // all existing TuitionPay
// exports.get_tuition_receipts = async ()=>{
//   const receipts = await TuitionPay.find({})
//   return receipts
// }

// // update an existing tuition
// exports.update_receipt_info = async (query, upd_data)=>{
//   const upd = await TuitionPay.findOneAndUpdate(query, upd_data)
//   return upd
// }

// // delete an existing tuition
// exports.delete_receipt = async (title)=>{
//   const del = await TuitionPay.findOneAndRemove({title})
//   return del
// }
