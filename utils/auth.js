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
  verify: async function (req) {
    let token;
    try {
      if (!req.headers) {
        token = false;
      } else if (!req.headers.authorization) {
        token = false;
      } else {
        token = req.headers.authorization.split(" ")[1];
      }
      if (!token) {
        throw new Error("Please Login to continue");
      }
      let match = await jwt.verify(token, JSON_SEOL, function (err, tokenData) {
        if (err) {
          throw new Error(err.message);
        } else {
          return tokenData;
        }
      });
      if (!match) {
        throw new Error("Session Expired");
      }
      return match;
    } catch (err) {
      return err.message;
    }
  },
};
