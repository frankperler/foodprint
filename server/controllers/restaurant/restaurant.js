'use strict';

const db = require('../../models/index');

exports.claimSupplier = async (req, res) => {
  try {
    // extract restaurant's id from req.body
    // const restId = req.body.rest_id;

    //Check if supplier exists in our DB (search by name?)
    const supplier = await db.Supplier.findOne({
      where: {
        sup_name: req.body.sup_name
      }
    })
    console.log("supplier:   ", supplier)
    console.log('//////////////=======', supplier.dataValues)
    console.log('=-----------=======', supplier.dataValues.id)
    // SCENARIO 1 : Supplier already exists in our database
    // check if relation exists
    const relation = await db.Join_Res_Sup.findOne({
      where: {
        SupplierId: supplier.dataValues.id,
        RestaurantId: req.body.rest_id
      }
    })

    // create relation between restaurant and supplier if it doesnt already exist


    if (!relation) {
      const relation = await db.Join_Res_Sup.create({
        SupplierId: supplier.dataValues.id,
        RestaurantId: req.body.rest_id
      })
      res.send(relation)
    }
    else {
      res.send('Error! You are already associated to this supplier.')
    }

  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}