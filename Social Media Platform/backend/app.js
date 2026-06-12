require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const errorHandler =
require("./middleware/errorMiddleware");

/* Routes */
const authRoutes =
require("./routes/authRoutes");

const userRoutes =
require("./routes/userRoutes");

const postRoutes =
require("./routes/postRoutes");

const commentRoutes =
require("./routes/commentRoutes");

const likeRoutes =
require("./routes/likeRoutes");

const followRoutes =
require("./routes/followRoutes");

const app = express();

/* Middlewares */
app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);

/* Static Uploads */
app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "uploads")
    )
);

/* Health Check */
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ConnectHub API Running"
    });
});

/* API Routes */
app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/users",
    userRoutes
);

app.use(
    "/api/posts",
    postRoutes
);

app.use(
    "/api/comments",
    commentRoutes
);

app.use(
    "/api/likes",
    likeRoutes
);

app.use(
    "/api/follows",
    followRoutes
);

/* 404 Handler */
app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

/* Global Error Handler */
app.use(errorHandler);

module.exports = app;