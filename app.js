const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors')

require("dotenv").config();

const { PORT } = process.env;
const { WELCOME_MESSAGE, DATABASE_URL } = process.env;

const app = express();



app.use(bodyParser.json()); // for parsing application/json
// it helps log into the syetem
app.use(cors());

;

//spining database
mongoose
  .connect(DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => {
      let message = `${WELCOME_MESSAGE} ${PORT}`;
      console.log(message);
    });
  })
  .catch((error) => {
    console.error("Failed to start the server due to : ", error);
  });
