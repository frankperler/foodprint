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
      const user = await userCredentials.getUser();
      const token = JWT.sign({id: user.id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '2h'});
      if (user.user_type === 'restaurant') {
        const restaurants = await user.getRestaurants({
          include: db.Supplier
        });
        res.send({ user, restaurants, token });
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
        res.send({ user, suppliers, token  });
      }
      else {
        console.log(user);
        res.send({user, token});
      }
    }
  }
  catch (e) {
    console.log(e);
    res.sendStatus(500)
  }
}
  

exports.profile = async(req, res) => {
  console.log("got to profile controller!!")
  try {
    
    res.json("Authorized to see profile")
  }
  catch (e) {
    console.log("from the catch ")
    console.log(e);
    res.sendStatus(500);
  }
}


