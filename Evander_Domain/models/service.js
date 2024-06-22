const { mongoose } = require('../../SharedLibrary/database');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true}
})

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;