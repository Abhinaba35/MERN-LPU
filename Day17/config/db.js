const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_DB_URL, {
    dbName: "Day17",
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("DB connection error:");
    console.error(err.message);
});