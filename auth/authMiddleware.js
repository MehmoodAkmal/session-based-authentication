// import express from 'express';

// Authenticate user on session base
export const authenticateUser = async (req, res, next) => {
    console.log("🚀 ~ Checking session data:", req.session);
    console.log("🚀 ~ Checking session ID:", req.session.userID);

  if (req.session && req.session.userID) {
    next();
  } else {
    return res.status(400).json({ Message: "You are not loged in" });
  }
};
