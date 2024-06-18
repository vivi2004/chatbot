const mongoose = require('mongoose');

// Define a schema for questions and responses
const QASchema = new mongoose.Schema({
  question: String,
  response: String
});

const QA = mongoose.model('QA', QASchema);

module.exports = QA;
