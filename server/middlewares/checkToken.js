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
  req.user = decoded.consumer;
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
};  
