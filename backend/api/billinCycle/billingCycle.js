const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditScheme = new mongoose.Schema ({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true}
});

const debtScheme = new mongoose.Schema ({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true},
    status: {type: String, uppercase: true, required: false,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
});

const billingCycleScheme = new mongoose.Schema ({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min: 1980, max: 2100, required: true},
    credits: [creditScheme],
    debts: [debtScheme]
});

module.exports = restful.model('BillingCycle', billingCycleScheme)