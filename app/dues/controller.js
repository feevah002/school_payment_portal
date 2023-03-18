/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description ''
 * @route `/`
 * @access ''
 * @type ''
 */
const {
        new_due,
        get_all_dues,
        get_due,
        get_due_for_dept,
        update_due_info,
        delete_due,
      } = require('./repository');
const {due_create_validate} = require('../../middleware/validate');
const {validate_onPost} = due_create_validate
const {
        get_a_dept,
      } = require('../department/repository');

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description create due
 * @route /v1/dues
 * @access Public
 * @type POST
 */
exports.collect_due_info  = async (req,res)=>{
  try{
    // put for validation before letting it in
    const unvalidated_info = req.body
    const validated_info = await validate_onPost(unvalidated_info)
  
    // should be returned in form of a list
    const depts = validated_info.department_to_pay
    let deptIdArr = []

    for(let i=0; i < depts.length; i++){
      const dept_data = await get_a_dept({ dept_name: depts[i]})
      deptIdArr.push(dept_data.id)
    }
    const payload = {
      title:validated_info.title,
      amount:validated_info.amount,
      bank:validated_info.bank,
      account_number:validated_info.account_number,
      department_to_pay:deptIdArr
    } 

    const created_data = await new_due(payload)
  
    return  res.status(200).json({
              status:true,
              data:created_data,
            });
  } catch(error){
    return  res.status(500).json({
              error:`Something went wrong: ${error}`,
              status:false,
            });
  }
}

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description get all dues
 * @route /v1/dues
 * @access Public
 * @type POST
 */
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

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description search a specific due
 * @route /v1/dues/:due
 * @access Public
 * @type GET
 */ 
exports.search_a_due = async(req, res)=>{
  try{
    const due = await get_due({title: req.params.due.toLowerCase()})
;
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

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description get all dues for a specific department
 * @route /v1/dues/:dept
 * @access Public
 * @type GET
 */ 
exports.search_dues_for_a_dept = async(req, res)=>{
  try{
    let due = await get_due_for_dept(req.params.dept.toLowerCase())
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


/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description Update due info
 * @route /v1/dues/:due
 * @access Public
 * @type PUT
 */
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
/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description delete due info
 * @route /v1/dues/:due
 * @access Public
 * @type Delete
 */
exports.delete_info = async(req, res)=>{
  try{
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