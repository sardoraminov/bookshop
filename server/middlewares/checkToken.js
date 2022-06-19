const jwt = require("jsonwebtoken");

const checkConsumer = (req, res, next) => {
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
  req.consumer = decoded.consumer;
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
  const decoded = jwt.verify(token, process.env.JWT_ADMIN);
  if (!decoded) {
    return res.json({
      msg: "Unauthorized",
      fulllMsg: "You don't have permission to access this resource",
      code: 403,
    });
  }

  req.admin = decodedAdmin.admin;
};

const checkToken = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.json({
      msg: "Token not found",
      fulllMsg: "You don't have permission to access this resource",
      code: 401,
    });
  }
  const decodedConsumer = jwt.verify(token, process.env.JWT_SECRET);
  const decodedAdmin = jwt.verify(token, process.env.JWT_ADMIN);
  if (!decodedConsumer && !decodedAdmin) {
    return res.json({
      msg: "Unauthorized",
      fulllMsg: "You don't have permission to access this resource",
      code: 403,
    });
  }
  decodedAdmin
    ? (req.admin = decodedAdmin.admin)
    : (req.consumer = decodedConsumer.consumer);

  next();
};

module.exports = { checkConsumer, checkAdmin, checkToken };
