// Authenticate user on session base
export const authenticateUser = (roleAllowed = []) => {
  return async (req, res, next) => {
    console.log("🚀 ~ Checking session data in middleware:", req.session);
    console.log("🚀 ~ Checking session user in middleware:", req.session.user);
    if (req.session && req.session.user) {
      console.log(`req.session.user.role : ${req.session.user.role}`);
      if (roleAllowed.includes(req.session.user.role)) {
        next();
      } else {
        return res.status(400).json({ Message: "Unauthorized" });
      }
    } else {
      return res.status(400).json({ Message: "You are not loged in" });
    }
  };
};
