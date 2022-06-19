const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.json({
      msg: "Token not found",
      fulllMsg: "You don't have permission to access this resource",
      code: 401,
    });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    return res.json({
      msg: "Unauthorized",
      fulllMsg: "You don't have permission to access this resource",
      code: 403,
    });
  }

  decoded.consumer.username === "bookadmin"
    ? (req.admin = decoded.consumer)
    : (req.consumer = decoded.consumer);
  next();
};

const checkAdmin = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.json({
      msg: "Token not found",
      fulllMsg: "You don't have permission to access this resource",
      code: 401,
    });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    return res.json({
      msg: "Unauthorized",
      fulllMsg: "You don't have permission to access this resource",
      code: 403,
    });
  }

  if (decoded.consumer.username !== "bookadmin") {
    return res.json({
      msg: "Unauthorized",
      fulllMsg: "You don't have permission to access this resource",
      code: 403,
      not_allowed_username: true,
    });
  }

  req.admin = decoded.consumer;
  next()
};

module.exports = { checkToken, checkAdmin };
