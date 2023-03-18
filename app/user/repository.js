const User = require('./model')


exports.register_user = async (user_info, password)=>{
  const user = new User(user_info);
  const reg_user = await User.register(user, password);
  return reg_user;
}


exports.find_user = async (query)=>{
  const found = User.findOne(query).populate('department');
  // const found = User.find({});
  return found;
}
exports.update_user = async (query)=>{
  const upd = User.findOneAndUpdate(query);
  return upd;
}
