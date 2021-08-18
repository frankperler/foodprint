'use strict';

const db = require('../../models/index');

// register controller
exports.addUser = async (req, res) => {
  try {
    const login = await db.Login.create({
      email: req.body.email,
      password: req.body.password,
    });
    const user = await db.User.create({
      user_type: req.body.user_type,
      user_first_name: req.body.user_first_name,
      user_last_name: req.body.user_last_name,
      LoginId: login.id
    });
    await login.setUser(user)
    res.send(user)
  }
  catch (e) {
    console.log(e)
    res.status = 500;
  }
} 

// login controller
exports.getUser = async (req, res) => {
  try {
    const login = await db.Login.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      }
    })
    const user = await login.getUser();
    res.send(user)
  }

  catch (e) {
    console.log(e);
    res.status = 500;
  }
}