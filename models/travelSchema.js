
import mongoose from "mongoose";

const travelSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    month: {
        type:String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }
})

export default mongoose.model('Travel', travelSchema);