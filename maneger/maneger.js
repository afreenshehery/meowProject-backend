
const Wevcam = require('../models/webcam')
const logInTable = require('../models/logIn')
const { generateOTP } = require("../otp");
const fast2sms = require("fast-two-sms");



let logIn = async (body) => {

      const otp = generateOTP(6);

      console.log(otp, "jhkjh");
      console.log("manager reached");

      let newuser = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.Email,
            Otp: otp

      }
      console.log(newuser);
      let a = await logInTable.create(newuser);
      var options = {
            authorization: "BM2hnah41njX4ALWtcA4kY5iS3pofevbXITqAzat4LvCdK2ywlSP0pZPK3uD",
            message: `Hello ${body.firstName + " " + body.lastName} your OTP is ${otp}`,
            numbers: [body.Email]
      }
      fast2sms.sendMessage(options).then((res) => {
            console.log(res, "hello");
      }).catch((err) => {
            console.log(err);

      })

      return { otp: otp }



};






module.exports = { logIn };