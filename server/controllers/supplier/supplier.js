'use strict';

const db = require('../../models/index');
const { Sequelize } = require('../../models/index');
const Op = Sequelize.Op;

exports.getAllSuppliers = async (req, res) => {
  try {
    const supplier = await db.Supplier.findAll({
      include: {
        model: db.Production,
          include: db.Product
      },
    })
    res.send(supplier)
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}

exports.filterRestaurants = async (req, res) => {
  try {
    const { eco_score, type, meal_type } = req.body;

    let where = {
      rest_eco_score: {
        [Op.gte]: eco_score,
      }
    }
    
    where["rest_types"] = {[Op.contains]: [...type]};
    where["rest_meal_type"] = {[Op.contains]: [...meal_type]};

    const restaurants = await db.Restaurant.findAll({
      where,
    })
    res.send(restaurants);
  }
  catch(e) {
    console.log(e);
    res.status = 500;
  }
}


exports.addProduction = async (req, res) => {
  try {
    // extract name of product from req.body
    // go to Products table and find one by name
    const product = await db.Product.findOne({
        where: {
            product_name: req.body.product_name,
        }
    })
    // extract co2 value corresponding to that product
    const co2 = product.product_CO2;
    // use that to make production co2 calculation (tons coming in the req.body)*c02 value *10
    const productionAmount = req.body.production_amount;
    const productionEmissionsKG = productionAmount*co2*10;

    //create production instance in productions table
    const production = await db.Production.create({
        production_amount: productionAmount,
        production_CO2 : productionEmissionsKG,
        // and assign the supplier Id as foreign key in the Productions table
        SupplierId : req.body.sup_id
    })
    await product.setProductions(production);
    res.send({product, production}); 
}

  catch (e) {
    console.log(e);
    res.status = 500;
  }
}

exports.claimRestaurant = async (req, res) => {
  try {
    const restaurant = await db.Restaurant.findOne({
      where: {
        rest_name: req.body.rest_name
      },
      include: db.Supplier
    })

    if (!restaurant.Suppliers.find(supplier => {
      return supplier.id === req.body.sup_id
    })) {

      const supplier = await db.Supplier.findOne({
        where: {
          id: req.body.sup_id
        }
      })
     
      await supplier.addRestaurant(restaurant)
      await restaurant.addSupplier(supplier)

      const newSupplier = await db.Supplier.findOne({
        where: {
          id: supplier.id
        },
        include: db.Restaurant
      })
      res.send(newSupplier);
    }
    else {
      res.send('Error! You are already associated to this restaurant.')
    }
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}




// exports.findSuppliersByProduct = async (req, res) => {
//     try {
//         // extract product name from req.body &
//         // look for product by product_name in the products table
//         const product = await db.Product.findOne({
//             where: {
//                 product_name: req.body.product_name,
//             }
//         })
//         // extract the id from that product
//         const product_id = product.id;

//         // go to the productions table and extract all that match this id
//         const productionsMatch = await db.Production.findAll({
//           where: {
//             ProductId: product_id,
//           }
//         })

//         // get supplier id of matches
//         const supplierIds = productionsMatch.map(production => {
//          const supplierId = production.SupplierId;
//          // TO BE CONTINUED!!!!!!!!
//          const supplier = await db.Supplier.findOne({
//             where: {
//                 id: supplierId
//             }
//          })
//          return supplier;
//         })
//         // find all names of suppliers


//        res.send({
//            supplier,
//            production, 
//            product
//        })
//     }
//     catch (e) {
//       console.log(e);
//       res.status = 500;
//     }
// }


// use the returned product and extract the co2 value
    //     const co2 = product.product_CO2;
    //     // extract amount of production from req.body
    //     const productionAmount = req.body.production_amount
    //     // calculate the values for the production
    //     const productionEmissionsKG = productionAmount*co2*10; // kg CO2e

    //     // add production to production table
    //     const production = await db.Production.create({
    //         production_amount: productionAmount,
    //         production_CO2 : productionEmissionsKG,
    //     })

    //     // get the supplier from the db
    //     // do setProduction on the supplier  
    //    const supplier = await db.Supplier.findOne({
    //        where: {
    //         id: req.body.sup_id
    //        }
    //    })
    //    await supplier.setProductions(production);
    //    await supplier.setProducts(product);
    //    await product.setProductions(production);

