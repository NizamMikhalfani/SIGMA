const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DATABASE_URL;
console.log('Database URL:', uri); // Add this line to check the value

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;