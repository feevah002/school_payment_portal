const User = require('./model')


exports.register_user = async (user_info, password)=>{
  const user = new User(user_info);
  const reg_user = await User.register(user, password);
  return reg_user;
}
