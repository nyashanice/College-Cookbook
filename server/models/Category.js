const Schema = require("mongoose");

const categorySchema = new Schema({
  categoryId: {
    type: ObjectId,
    default: new ObjectId(),
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = categorySchema;
