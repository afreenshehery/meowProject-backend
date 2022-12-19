const manager = require('../maneger/maneger');



let logIn = async (req, res, next) => {
      console.log("reached controller");
      return manager.logIn(req.body)
            .then(data => {
                  let result = {
                        status: 200,
                        // data: data,
                        data: data,
                        otp: data.otp
                        // all: data.a,



                  }
                  return res.json(result);

            }).catch(next);
}






module.exports = { logIn }