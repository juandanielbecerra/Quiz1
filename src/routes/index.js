const express = require('express');
const personRouter = require('./person.router');

function routerApi(app) {
    /* endpoint http://localhost:5000/api/v1 */
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/person', personRouter);
}
module.exports = routerApi; 
