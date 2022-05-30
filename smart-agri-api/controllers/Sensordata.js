import { v4 as uuid } from "uuid";
import mongoose from "mongoose";
import Sensor from "../models/sensor.js";

let Sensordata = [
  {
    id: 1,
    temperature: "28.3",
    soilmoisture: "43",
    humidity: "67.0",
  },
  {
    id: 2,
    temperature: "68.3",
    soilmoisture: "23",
    humidity: "27.0",
  },
  {
    id: 3,
    temperature: "68.3",
    soilmoisture: "23",
    humidity: "27.0",
  },
  {
    id: 4,
    temperature: "68.3",
    soilmoisture: "23",
    humidity: "27.0",
  },
];

export const getData = (req, res) => {
  console.log(`Data in the database: ${Sensordata}`);
  res.send(Sensordata);
};

export const createData = (req, res) => {
  const sendata = new Sensor({ ...data, id: mongoose.Types.ObjectId() });
  const data = req.body;
  Sensordata.push({ ...data, id: mongoose.Types.ObjectId() });
  console.log(`Data added to the database.`);
};

export const getDatabyId = (req, res) => {
  res.send(req.params.id);
};

export const deleteDatabyId = (req, res) => {
  console.log(`user with id ${req.params.id} has been deleted`);
  Sensordata = Sensordata.filter((data) => data.id !== req.params.id);
};

export const updateData = (req, res) => {
  const data = Sensordata.find((data) => data.id === req.params.id);
  data.temperature = req.body.temperature;
  data.soilmoisture = req.body.soilmoisture;
  data.humidity = req.body.humidity;

  console.log(`Data Updated`);
};
