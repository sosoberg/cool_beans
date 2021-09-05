const jwt = require("jsonwebtoken");
const db = require("../config/connections");

module.exports = {
  jwtSign: async function (args, user) {
    try {
      if (!user) {
        throw new Error("Invalid login credentials");
      }
      let match = await user.checkPassword(args.password);
      if (!match) {
        throw new Error("Invalid login credentials");
      }
      let token = await jwt.sign(
        { userId: user._id, userName: user.username },
        process.env.JSON_SEOL,
        { expiresIn: "1h" }
      );
      // return token
      return token;
    } catch (err) {
      return false
    }
  },
  verify: function({req}){
    let token = req.body.token || req.query.token || req.headers.authorization;

    if(req.headers.authorization){
        token = token.split(" ")[1]
    }

    if(!token){
        return req
    }

    try{
        const data = jwt.verify(token, process.env.JSON_SEOL, {maxAge: "1hr"});
        req.user = data
    }catch{
        console.log('Invalid token')
    }
    return req
}
};
