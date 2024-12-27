// const mongoose = require("mongoose");

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://toletglobetech:ToletGlobe%401234@toletglobe.ux8lg4n.mongodb.net/blog?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error("MONGODB connection failed:", err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;

