const mongoose = require("mongoose");

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cookbook",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// module.exports = mongoose.connection;

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/cookbook", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = { connectDB };

