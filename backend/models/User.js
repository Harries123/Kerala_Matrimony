const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,  
    email: { type: String }, 
    password: String,  
    phone: String,  
    relation: String,  
    gender: String,  
    country: { type: String, default: "IN" },  
    dob: Date,  
    religion: String,  
    motherTongue: String, 
    maritalStatus: String,  
    disability: { type: String, default: "None" }, 
    caste: String,  
    education: String,  
    location: String,  
    profilePhoto: String,  
    isPremium: { type: Boolean, default: false },
    isVerified: {type: Boolean, default: false },
    otp: String, //phone validation
    emailOtp: String, //email validation
});

module.exports = mongoose.model("User", UserSchema);
