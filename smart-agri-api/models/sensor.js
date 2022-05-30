import mongoose from "mongoose";

// Sensor schema
const sensorSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  soilmoisture: Number,
});

export default mongoose.model("Sensor", sensorSchema);
