const jwt = require("jsonwebtoken");
exports.verifyToken = async (req, res, next) => {
    let token = req.headers.authorization || '';
    if (token.startsWith('Bearer ')) {
        token = token.substring(7);
    }
    if (!token) {
        res.status(401).json({
          success: false,
          message: 'Unauthorized'
        });
      } else {
        jwt.verify(token, 'user', (err, decoded) => {
          if (err) {
            res.status(401).json({
              success: false,
              message: 'Unauthorized'
            });
          }
          req.decoded = decoded;
          next();
        });
      }
    // if (!token) return res.status(403).json({ message: "No token provided" });
  
    // try {
    //   const decoded = jwt.verify(token, config.SECRET);
    //   req.userId = decoded.id;
  
    //   const user = await User.findById(req.userId, { password: 0 });
    //   if (!user) return res.status(404).json({ message: "No user found" });
  
    //   next();
    // } catch (error) {
    //   return res.status(401).json({ message: "Unauthorized!" });
    // }
};