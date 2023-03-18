
const {
  new_dept,
  get_all_dept,
  get_a_dept,
  update_dept_info,
  delete_dept,
} = require('./repository');
// importing department validate class(which is an opject)
const { dept_validate } = require('../../middleware/validate')
// getting methods from the imported classes
const { validate_onPost, validate_onGet }= dept_validate


/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description post create a new department
 * @route /v1/dept
 * @access Public
 * @type POST
 */
exports.collect_dept_info  = async (req,res)=>{
try{
  // valudate input
  const validated_info = await validate_onPost(req.body)
  const created_data = await new_dept(validated_info)

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


/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description get a specific department
 * @route /v1/dept/:dept
 * @access Public
 * @type GET
 */ 
exports.search_a_dept = async(req, res)=>{
  try{
  
  const validated_info = await validate_onGet(req.params.dept)
  const dept = await get_a_dept({dept_name: validated_info})

  return  res.status(200).json({
            status:true,
            data:dept,
          });
  
  }catch(error){
    return  res.status(500).json({
              error:`Something went wrong: ${error}`,
              status:false,
            });
    }
  }
  

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description get all departments
 * @route //v1/dept
 * @access Public
 * @type GET
 */
exports.search_all_dept = async(req, res)=>{
try{
const dept = await get_all_dept()

return  res.status(200).json({
          status:true,
          data:dept,
        });

}catch(error){
return  res.status(500).json({
          error:`Something went wrong: ${error}`,
          status:false,
        });
} 
}


/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description update a department info
 * @route /v1/dept/:dept
 * @access Public
 * @type PUT
 */

exports.update_dept_info = async(req, res)=>{
try{
const upd_data = req.body
const dept = await update_dept_info(req.params.dept.toLowerCase(), upd_data)

return  res.status(200).json({
          status:true,
          data:dept,
        });

}catch(error){
return  res.status(500).json({
            error:`Something went wrong: ${error}`,
            status:false,
          });
}
}
/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description delete a department
 * @route /v1/dept/:dept
 * @access Public
 * @type DELETE
 */
exports.delete_dept = async(req, res)=>{
try{
  const dept = await delete_dept(req.params.dept.toLowerCase())

  return  res.status(200).json({
            status:true,
            data:dept,
          });

  }catch(error){
  return  res.status(500).json({
            error:`Something went wrong: ${error}`,
            status:false,
          });
  }
}