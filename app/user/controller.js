const { repo_reg_user: register_user } = require('./repository')


exports.collect_user_info = async (req,res)=>{
  try{
    const username =  req.body.username
    const course =  req.body.course
    const password =  req.body.password 
    const user_info = {
      username,
    }
    const registered_user = await repo_reg_user(user_info, password)
    return  res.status(200).json({
              message:'User successfuly registered',
              new_user: registered_user
            })

  } catch(error){
    return  res.status(500).json({
              error,
              status:'false'
            });
  }
} 

exports.login_user = async()=>{
  passport.authenticate("local",{
    successRedirect:'/',
    failureRedirect:"/login"
  })
}
