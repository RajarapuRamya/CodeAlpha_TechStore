require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

// Start Server
const server = app.listen(PORT, () => {
    console.log(`
========================================
🚀 ConnectHub Server Started
🌐 Environment : ${process.env.NODE_ENV}
📡 Port        : ${PORT}
========================================
`);
});

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {

    console.error("UNHANDLED REJECTION!");
    console.error(err.name);
    console.error(err.message);

    server.close(() => {
        process.exit(1);
    });

});

// Handle Uncaught Exceptions
process.on("uncaughtException", (err) => {

    console.error("UNCAUGHT EXCEPTION!");
    console.error(err.name);
    console.error(err.message);

    process.exit(1);

});