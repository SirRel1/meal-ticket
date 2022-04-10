const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  resid: {
    type: String,
    required: true,
    // unique: true,
  },
  imageurl: {
    type: String,
  },
  name: {
    type: String,
  },
});

const Tech = model('Tech', techSchema);

module.exports = Tech;
