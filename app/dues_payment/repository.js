const DuesPay = require('./model')

// create a due
exports.save_webhook_data = async (data)=>{
  const payload = await DuesPay.create(data)
  return data
}

// //receipts
// exports.get_dept_due_receipts = async (dept)=>{
//   const found = await DuesPay.findOne({dept})
//   return found
// }


// // all existing DuesPay
// exports.get_due_receipts = async ()=>{
//   const receipts = await DuesPay.find({})
//   return receipts
// }

// // update an existing due
// exports.update_receipt_info = async (query, upd_data)=>{
//   const upd = await DuesPay.findOneAndUpdate(query, upd_data)
//   return upd
// }

// // delete an existing due
// exports.delete_receipt = async (title)=>{
//   const del = await DuesPay.findOneAndRemove({title})
//   return del
// }
