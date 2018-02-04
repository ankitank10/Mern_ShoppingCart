const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/users');

const authRoutes = require('./routes/authRoutes');
const Keys = require('./config/keys');


app.use(
	cookieSession({
		maxAge: 30*24*60*60*1000,
		keys: [Keys.COOKIE_KEY]
	})
)
//Passport needs to use cookie session
app.use(passport.initialize());
app.use(passport.session());
require('./services/passport');
authRoutes(app); // This is imp , placing this line on top after const keys gives initialization error

let database =  Keys.MONGOOSE_URI;

const options = {
	autoIndex: false, // Don't build indexes
    reconnectTries: 1000, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    //poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
mongoose.connect(database,options).then(
	()=>{
		console.log("connected to mongoDB")
	},
	(err)=>{
		console.log("err",err);
	}
);

const port = process.env.PORT || 8999;
app.listen(port);