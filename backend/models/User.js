const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    age: Number,
    gender: String,
    caste: String,
    education: String,
    location: String,
    profilePhoto: String,
    isPremium: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);
