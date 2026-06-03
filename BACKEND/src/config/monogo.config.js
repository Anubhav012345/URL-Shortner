import mongoose from "mongoose";
<<<<<<< HEAD

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
=======
console.log(process.env.MONGO_URI);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
>>>>>>> 97ac6f6ebdc9da20572f9b1069352d334d9411b3
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

<<<<<<< HEAD
export default connectDB;
=======
export default connectDB;
>>>>>>> 97ac6f6ebdc9da20572f9b1069352d334d9411b3
