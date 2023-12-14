
import mongoose from "mongoose";

const salarySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    month: {
        type: String,
        unique: true,
        required: true,
    },
    total: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Salary', salarySchema);