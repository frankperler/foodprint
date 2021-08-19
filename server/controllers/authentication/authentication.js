'use strict';

const db = require('../../models/index');

// login controller
exports.findUser = async (req, res) => {
  try {
    const login = await db.Login.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      }
    })
    const user = await login.getUser();
    if (user.user_type === 'restaurant') {
      const restaurants = await user.getRestaurants({
        include: db.Supplier
      });
      res.send({ user, restaurants });
    }
    else if (user.user_type === 'supplier') {
      const suppliers = await user.getSuppliers({
        include: [
          {model: db.Restaurant},
          {model: db.Production,
            include: db.Product
          },
        ]        

      });
      res.send({ user, suppliers });
    }
    else {
      res.send(user);
    }
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}