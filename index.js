const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/users");

const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const Keys = require("./config/keys");

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [Keys.COOKIE_KEY]
  })
);
app.use(bodyParser.json());
//Passport needs to use cookie session
app.use(passport.initialize());
app.use(passport.session());
require("./services/passport");


let database = Keys.MONGOOSE_URI;

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 1000, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  //poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mongoose.connect(database, options);
authRoutes(app); // This is imp , placing this line on top after const keys gives initialization error
billingRoutes(app);

if(process.env.NODE_ENV === 'Production'){
  //Express will serve up production assets like
  //main.js or main.css
  app.use(express.static('client/build'));

  //Express will serve index.html in all other cases if it 
  //doesn't recognise the route

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 8999;
app.listen(port);
