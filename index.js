const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()
const PORT = process.env.PORT || 4444
app.get("/", (req, res) => {
  res.send(`<h1>Hello I'm nodejs server. I'm running on PORT : ${PORT}</h1>`)
})

app.listen(PORT, () =>{
  console.log(`App is runnig on PORT ${PORT}`);
})