import mongoose from "mongoose";

const connectionDB = async () => {
    
  try {
    await mongoose.connect("mongodb+srv://rust:JavaScript2003@deploy-app.rd4hffc.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[DATABASE]: connected to MONGO_DB".blue);
  } catch (error) {
    throw new Error(error);
  }
};

export default connectionDB;