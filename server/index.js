'use strict';

const Express = require('express');
const app = Express();

const db = require('/models/index');
const router = require ('/router.js');

app.use(router.routes());

(async () => {
  await db.sequelize.sync();
  const port = 3000;
  app.listen(port);
  console.log(`Server listening on port ${port} 🚀`) // eslint-disable-line no-console
})();