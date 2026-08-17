import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MongoDB connected successfully ::: HOST ::: ${conn.connection.host}`,
    );
  } catch (error) {
    console.log(`atabase Connection Failed: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
