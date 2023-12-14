
import mongoose from "mongoose";

const personalSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: true,
        trim: true,
    },
    month: {
        type:String,
        required: true,
    },
    total: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Personal', personalSchema);