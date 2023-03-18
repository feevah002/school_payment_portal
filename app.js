const app = require('express')()
const { connectDB } = require('./database/mongodb'),
      cors = require('cors'),
      body_parser = require('body-parser');

require('dotenv').config({path: './.env/config.env'})
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json())
require('./bin/auth')
app.use(cors())

// connecting db
connectDB()

// routes
const dues_route = require('./app/student_dues/route')
const user_route = require('./app/user/route')
const dept_route = require('./app/department/route')
app.use('v1/', user_route)
app.use('/v1', dues_route)
app.use('/v1', dept_route)


// export
module.exports = app

