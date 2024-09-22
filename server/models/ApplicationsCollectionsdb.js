const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  applicationId: {
    type: String,
    required: true,
    unique: true
  },
  jobId: {
    type: String,
    required: true
  },
  seekerId: {
    type: String,
    required: true
  },
  providerId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  appliedDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  reviewDate: {
    type: Date,
    default: null
  }
});

// Create the model
const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
