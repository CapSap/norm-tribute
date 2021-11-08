const express = require("express");
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT || 3001;

const app = express();

//serve static react
app.use(express.static(path.join(__dirname,"/rip-norm/build")))

//routes
app.use('/api', require('./routes'))

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./rip-norm/build", "index.html"))
})

app.use(cors())

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
                    