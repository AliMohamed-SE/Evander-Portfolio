import { mongoose } from '../../SharedLibrary/database.js';

const attributeSchema = new mongoose.Schema({
    title: { type: String },
    images: [{
        src: String,
        alt: String
        }],
    description: { type: String }
});

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    creationDate: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
    designSections: [attributeSchema],
    devSections: [attributeSchema],
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;