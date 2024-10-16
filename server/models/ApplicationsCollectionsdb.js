const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  applicationId: {
    type: String,
    required: true,
    unique: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  seekerId: {
    type: String,
    required: true,
  },
  providerId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'done'],  
    default: 'pending',
  },
  appliedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  reviewDate: {
    type: Date,
    default: null,
  },
});

const Application = mongoose.model('application', applicationSchema);

module.exports = Application;
