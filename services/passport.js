const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/dev');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    console.log('serialize',user)
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    console.log('deserialize',user)
    done(null, user);
  });
});
passport.use(new GoogleStrategy({
    clientID: Keys.GOOGLE_CLIENT_ID,
    clientSecret: Keys.GOOGLE_CLIENT_SECRETKEY,
    callbackURL: "/auth/google/callback"
  },(accessToken, refreshToken, profile, done) => {
        User.findOne({googleID: profile.id}).then((existingUser) => {
            if(existingUser){
                done(null, existingUser);
            } else{
                console.log('new');
                new User({googleID: profile.id}).save()
                .then((user) => {
                    console.log(user);
                    done(null, user);
                })
            }
        })
   }
));
