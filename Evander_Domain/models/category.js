const { mongoose } = require('../../SharedLibrary/database');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }]
})

module.exports = mongoose.model('Category', categorySchema);