const express = require('express');

module.exports = function (server) {
    //API rotas

    const router = express.Router();
    server.use('/api', router)

    //Rotas da API

    const billingCycle = require('../api/billinCycle/billingCycleService');
    billingCycle.register(router, '/billingCycles');

    const billingSummaryService = require('../api/billingSummary/billingSummaryService');

    router.route('/billingSummary').get(billingSummaryService.getSummary)

};