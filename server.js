const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//static Folder
app.use(express.static(path.join(__dirname, "./client/build")));

//static Route
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Node server running in ${process.env.DEVMODE} on port ${process.env.PORT}`
      .bgBlue.white
  );
});
