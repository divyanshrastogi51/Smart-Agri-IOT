import express from "express";
import bodyParser from "body-parser";

import dataRoutes from "./routes/sensordata.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
//import mongoose
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//establish connection to database
mongoose.connect(
  process.env.URL,
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) return console.log("Error: ", err);
    console.log(
      "MongoDB Connection -- Ready state is:",
      mongoose.connection.readyState
    );
  }
);

app.use("/data", dataRoutes);
app.get("/", (req, res) => res.send("Welcome to the Smart Agri API!"));
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
