
// models/Consumption.js
import mongoose from "mongoose";

const consumptionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true,
  },
  month: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Consumption", consumptionSchema);
