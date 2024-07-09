import { mongoose } from '../../SharedLibrary/database.js';

const budgetSchema = new mongoose.Schema({
    type: { type: String, required: true },
})

const Budget = mongoose.model('Budget', budgetSchema);

export default Budget;