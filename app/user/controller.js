const {  register_user, update_user } = require('./repository')
const { user_validate } = require('../../middleware/validate')
const { validate_onRegister } = user_validate
const {
  get_a_dept,
} = require('../department/repository');
const {
  get_all_dues,
  get_due_for_dept,
} = require('../dues/repository');

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description register a new user
 * @route /v1/auth/register
 * @access Public
 * @type POST
 */
exports.collect_user_info = async (req,res)=>{
  try{
    const password =  req.body.password
    const dues = await get_all_dues()
    const validated_data = validate_onRegister(req.body)
    const department = await get_a_dept({dept_name: validated_data.department})
    if(department){
      const data = {
        username: validated_data.username,
        email:validated_data.email,
        department: department.id,
        tuition:[],
        studentDues:[]
      }
      const registered_user = await register_user(data, password)
      return  res.status(200).json({
        message:'User successfuly registered',
        new_user: registered_user
      })
    } else{
      return  res.status(500).json({
                message:'invalid department',
                status:'false'
              });
    }

  } catch(error){
    console.log(error);
    return  res.status(500).json({
              error,
              status:'false'
            });
  }
} 

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description login an existing user
 * @route /v1/auth/register
 * @access Public
 * @type POST
 */
exports.login_user = async()=>{
  passport.authenticate("local",{
    successRedirect:'/',
    failureRedirect:"/login"
  })
}
