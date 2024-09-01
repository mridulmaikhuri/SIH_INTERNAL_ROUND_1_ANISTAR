const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],  // assuming a limited set of genders
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  height: {
    type: Number,  // Height in cm or other appropriate units
    required: true,
  },
  weight: {
    type: Number,  // Weight in kg or other appropriate units
    required: true,
  },
  insulin: {
    type: Number,  // Insulin level (units can be specified in comments)
    required: true,
  },
  bp: {
    type: String,  // Blood pressure, usually in "120/80" format
    required: true,
  },
  heart_rate: {
    type: Number,  // Heart rate in beats per minute (bpm)
    required: true,
  },
  glucose: {
    type: Number,  // Glucose level in mg/dL
    required: true,
  },
  fasting_blood_sugar: {
    type: Number,  // Fasting blood sugar level in mg/dL
    required: true,
  },
  pregnancies: {
    type: Number,  // Number of pregnancies (applicable only for females)
    default: 0,
  },
  cholestrol: {
    type: Number,  // Cholesterol level in mg/dL
    required: true,
  },
  symptoms: {
    type: [String],  // Array of symptoms as strings
  },
}, { timestamps: true });  // Automatically adds createdAt and updatedAt timestamps

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
