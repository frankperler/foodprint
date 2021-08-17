'use strict';

const db = require('../../models/index');

exports.addUser = async (req, res) => {
  try {
    req.body = await db.Restaurant.create({
      
    });
  }
  catch (e) {
    res.status = 500;
  }
} 




// router.get('/users', user.getUser);
// router.post('/users', user.addUser);
// router.put('/users/:id', user.updateUser);
// router.delete('/users/:id', user.deleteUser);