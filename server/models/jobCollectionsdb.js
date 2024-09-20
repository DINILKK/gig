const mongoose = require('mongoose');

// Create a new Schema object
const JobSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  shift: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  pay: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^https?:\/\//.test(v),
      message: props => `${props.value} is not a valid image URL!`
    }
  },
  type: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  providerId: {
    type: String,
    required: true
  },
  lastDate: {
    type: Date,
    default: null 
  }
}, {
  timestamps: true 
});

// Export the model
// const JobCollection = mongoose.model('JobsCollection');
const JobCollection = mongoose.model('gig', {}, 'jjobsCollection');

module.exports = JobCollection;
