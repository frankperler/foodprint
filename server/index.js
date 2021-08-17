'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./router');
const PORT = process.env.PORT || 3001;
const populate = require('./populate');

const db = require('./models/index');



app.use(router);

(async () => {
  try {
    await db.sequelize.sync();
  }
  catch (e) {
    console.log('ERROR: ', e)
  }
  app.listen(PORT);
  console.log(`Server listening on port ${PORT} 🚀`) // eslint-disable-line no-console
})();

