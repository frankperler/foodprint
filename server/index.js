'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./router');
const PORT = process.env.PORT || 3001;
// const populate = require('./populate');
// const populateSuppliers = require('./mockTools')

const db = require('./models/index');



app.use(router);

(async () => {
  try {
    await db.sequelize.sync();
    // console.log('connected to DB!!!!!')
  }
  catch (e) {
    console.log('ERROR: ', e)
  }
  app.listen(PORT);
  console.log(`Server listening on port ${PORT} 🚀`) // eslint-disable-line no-console
})();

