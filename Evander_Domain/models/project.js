const { mongoose } = require('../../SharedLibrary/database');

const attributeSchema = new mongoose.Schema({
    title: { type: String },
    image: {
        data: Buffer,
        contentType: String
    },
    paragraph: { type: String }
});

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    thumbnail: {
        data: Buffer,
        contentType: String 
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
    attributes: [attributeSchema],
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);