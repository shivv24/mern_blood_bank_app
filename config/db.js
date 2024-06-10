const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to mongodb database ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`mOngodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
