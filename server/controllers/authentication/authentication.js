'use strict';
const JWT = require('jsonwebtoken');
const db = require('../../models/index');

// login controller
exports.findUser = async (req, res) => {
  try {   
    const userCredentials = await db.Login.findOne({
      where: {
        email: req.body.email,
      }
    })
    if (!userCredentials) {
      res.send("The entered credentials are incorrect.")
    }
    else if (!userCredentials.validatePassword(req.body.password, userCredentials.password)) {
      res.send("The entered credentials are incorrect.")
    }
    else {
      console.log("password is correct")
      const user = await userCredentials.getUser();
      const token = JWT.sign({id: user.id}, process.env.TOKEN_SECRET);
      console.log("token", token)
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
        console.log({ user, suppliers });
        res.send({ user, suppliers });
      }
      else {
        console.log(user);
        res.send(user);
      }

    }
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}
  




