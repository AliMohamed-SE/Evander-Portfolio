import { mongoose } from '../../SharedLibrary/database.js';

const timeframeSchema = new mongoose.Schema({
    type: { type: String, required: true },
})

const Timeframe = mongoose.model('Timeframe', timeframeSchema);

export default Timeframe;