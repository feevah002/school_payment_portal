const router = require("express").Router({mergeParams: true});

const { collect_user_info, login_user} = require('./controller');


// register new user
router.post('/auth/register', collect_user_info)

// login existing user
router.post('/auth/login', login_user)


// exporting function
module.exports = router