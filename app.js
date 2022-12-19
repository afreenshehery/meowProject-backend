require("dotenv").config();
const express = require('express')


const app = express();

const sequelize = require('./config/db');
// const responseHandler = require('./middleware/responsehandler

app.use(express.json());
const cors = require('cors')
app.use(cors());

app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      );
      next();
});

app.use('/', require('./router/router'));
// app.use(responseHandler.onError);
app.listen(process.env.APP_PORT, () => {
      console.log("Server running on PORT : ", process.env.APP_PORT);
});

// sequelize.sync({ force: true })