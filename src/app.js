import express from "express";
import cors from "cors";

const app = express();

// Base Configuration
app.use(
  express.json({
    limit: "16kb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);

app.use(express.static("public"));

// CORS Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(", ") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

// Import the routes
import healthCheckRoute from "./routes/healthCheck.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthCheckRoute);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Project Management System!!");
});

export default app;
