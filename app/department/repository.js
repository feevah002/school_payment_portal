const Dept = require('./model')

// create a due
exports.new_dept = async (new_info)=>{
  const departments = await Dept.create(new_info)
  return departments
}

// get a particular due 
exports.get_a_dept = async (query)=>{
  const department = await Dept.findOne(query)
  return department
}


// all existing dues
exports.get_all_dept = async ()=>{
  const department = await Dept.find({})
  return department
}

// update an existing due
exports.update_dept_info = async (title, upd_data)=>{
  const upd = await Dept.findOneAndUpdate({title}, upd_data)
  return upd
}

// delete an existing due
exports.delete_dept = async (dept_name)=>{
  const del = await Dues.findOneAndRemove({dept_name})
  return del
}
