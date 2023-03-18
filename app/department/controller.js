/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description ''
 * @route `/`
 * @access ''
 * @type ''
 */
const {
  new_dept,
  get_all_dept,
  get_a_dept,
  update_dept_info,
  delete_dept,
} = require('./repository');


exports.collect_dept_info  = async (req,res)=>{
try{
  
  // put for validation before letting it in
  const unvalidated_info = req.body
  // const validated_info = await validate(unvalidated_info)

  const created_data = await new_dept(unvalidated_info)

  return  res.status(200).json({
          status:true,
          data:created_data,
        });
  }catch(error){

  return  res.status(500).json({
          error:`Something went wrong: ${error}`,
          status:false,
        });
  }
}

// get all due 
exports.search_all_dues = async(req, res)=>{
try{
const dues = await get_all_dues()

return  res.status(200).json({
        status:true,
        data:dues,
      });

}catch(error){
return  res.status(500).json({
        error:`Something went wrong: ${error}`,
        status:false,
      });
} 
}

// info on a specific due  
exports.search_a_due = async(req, res)=>{
try{
const due = get_due({title: req.params.due.toLowerCase()})

return  res.status(200).json({
        status:true,
        data:due,
      });

}catch(error){
return  res.status(500).json({
        error:`Something went wrong: ${error}`,
        status:false,
      });
}
}

// info on the dues for a department  
exports.search_dues_for_a_dept = async(req, res)=>{
try{
let due = get_due_for_dept(req.params.dept.toLowerCase())
due = due.split(' ').join('-')
return  res.status(200).json({
        status:true,
        data:due,
      });

}catch(error){
return  res.status(500).json({
        error:`Something went wrong: ${error}`,
        status:false,
      });
}
}


// update info about a due
exports.update_info = async(req, res)=>{
try{
const upd_data = req.body
const due = await update_due_info(req.params.due.toLowerCase(), upd_data)

return  res.status(200).json({
        status:true,
        data:due,
      });

}catch(error){
return  res.status(500).json({
        error:`Something went wrong: ${error}`,
        status:false,
      });
}
}
// delte a due
exports.delete_info = async(req, res)=>{
try{
const upd_data = req.body
const due = await delete_due(req.params.due.toLowerCase())

return  res.status(200).json({
        status:true,
        data:due,
      });

}catch(error){
return  res.status(500).json({
        error:`Something went wrong: ${error}`,
        status:false,
      });
}
}