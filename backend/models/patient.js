import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
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
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],  // assuming a limited set of genders
    default: 'Male',  // Default gender
  },
  age: {
    type: Number,
    default: 30,  // Default age
  },
  height: {
    type: Number,  // Height in cm or other appropriate units
    default: 170,  // Default height (e.g., 170 cm)
  },
  weight: {
    type: Number,  // Weight in kg or other appropriate units
    default: 70,  // Default weight (e.g., 70 kg)
  },
  insulin: {
    type: Number,  // Insulin level (units can be specified in comments)
    default: 10,  // Default insulin level
  },
  bp: {
    type: String,  // Blood pressure, usually in "120/80" format
    default: '120/80',  // Default blood pressure
  },
  heart_rate: {
    type: Number,  // Heart rate in beats per minute (bpm)
    default: 72,  // Default heart rate (e.g., 72 bpm)
  },
  glucose: {
    type: Number,  // Glucose level in mg/dL
    default: 100,  // Default glucose level
  },
  fasting_blood_sugar: {
    type: Number,  // Fasting blood sugar level in mg/dL
    default: 90,  // Default fasting blood sugar level
  },
  pregnancies: {
    type: Number,  // Number of pregnancies (applicable only for females)
    default: 0,  // Default number of pregnancies
  },
  cholestrol: {
    type: Number,  // Cholesterol level in mg/dL
    default: 200,  // Default cholesterol level
  },
  symptoms: {
    type: [String],  // Array of symptoms as strings
    default: [],  // Default to an empty array
  },
}, { timestamps: true });  // Automatically adds createdAt and updatedAt timestamps

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
