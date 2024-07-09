import { mongoose } from '../../SharedLibrary/database.js';

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
})

const Service = mongoose.model('Service', serviceSchema);

export default Service;