import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Broadcast from "react-icons/lib/go/radio-tower";
import Charts from "./components/Charts";
import "./App.css";
//import data from "./components/testData";
const url = "http://localhost:5000/data";
function App() {
  const [isLive, setIsLive] = useState(false);
  const [database, setDatabase] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const database = await response.json();
      setIsLive(true);
      setDatabase(database);
      console.log(database);
    } catch (error) {
      setIsLive(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    // const timer = () => {
    //   setInterval(() => {
    //     fetchData();
    //   }, 10000);
    // };
    // timer();
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="station-info">
        <h2>Station Dashboard</h2>
        <div className="status">
          <p>
            <strong>Sensors: </strong>
            <span>Temp.</span>
            <span>Soil-mositure</span>
            <span>Humidity</span>
          </p>
          <p>
            {isLive ? (
              <span className={`live`}>
                LIVE <Broadcast size={25} />
              </span>
            ) : (
              <span className={"off"}>
                OFFLINE <Broadcast size={25} />
              </span>
            )}
          </p>
        </div>
      </div>
      {database[0] !== undefined ? (
        <div className="status">
          {/* <h3>Temperature :</h3> */}
          <p>{database[0].temperature} *C</p>
          {/* <h3>Humidity :</h3> */}
          <p>{database[0].humidity}</p>
          {/* <h3>soilmoisture :</h3> */}
          <p>{database[0].soilmoisture}</p>
        </div>
      ) : (
        <span></span>
      )}
      {database[0] !== undefined ? (
        <div>
          <Charts
            temperature={database[0].temperature}
            humidity={database[0].humidity}
            soilmoisture={database[0].soilmoisture}
          />
        </div>
      ) : (
        <span></span>
      )}
      <Footer />
    </div>
  );
}

export default App;
