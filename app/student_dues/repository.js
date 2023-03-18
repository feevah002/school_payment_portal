const Dues = require('./model')

// create a due
exports.new_due = async (new_info)=>{
  const dues = await Dues.create(new_info)
  return dues
}

// get a particular due 
exports.get_due= async (query)=>{
  const found = await Dues.findOne(query)
  return found
}

// all the dues for a department
exports.get_due_for_dept = async (department_to_pay)=>{
  const found = await Dues.findOne({department_to_pay})
  return found
}

// all existing dues
exports.get_all_dues = async ()=>{
  const dues = await Dues.find({})
  return dues
}

// update an existing due
exports.update_due_info = async (title, upd_data)=>{
  const upd = await Dues.findOneAndUpdate({title}, upd_data)
  return upd
}

// delete an existing due
exports.delete_due = async (title)=>{
  const del = await Dues.findOneAndRemove({title})
  return del
}
