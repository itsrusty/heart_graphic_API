import mongoose from "mongoose";

const user = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    years: {
        Type: Number 
    },
    altura: {
        type: Number,
    },
    problemas: {
        type: String
    },
    actividades: {
        type: String
    }
});

const userModel = new mongoose.model("user", user);

export default userModel;