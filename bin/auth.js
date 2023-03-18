const expressSession = require("express-session"),
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      app = require('express')(),
      User = require('../app/user/model')


app.use(expressSession({
  secret:process.env.secret,
  resave:false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

