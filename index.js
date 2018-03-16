const express = require("express");
const app = express();

const authRoutes = require("./routes/cartRoutes");
authRoutes(app);


const port = process.env.PORT || 9999;
app.listen(port);
