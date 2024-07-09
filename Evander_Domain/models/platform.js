import { mongoose } from '../../SharedLibrary/database.js';

const platformSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    joined_at: { type: String}
})

const Platform = mongoose.model('Platform', platformSchema);

export default Platform;