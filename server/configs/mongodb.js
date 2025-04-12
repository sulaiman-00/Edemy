import mongoose from "mongoose";

// connect to mongodb

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database is connected");
  });
  await mongoose.connect(`${process.env.MONGO_URI}/edemy`);
};

export default connectDB;
