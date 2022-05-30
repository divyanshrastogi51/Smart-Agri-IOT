import React from "react";
import GaugeChart from "react-gauge-chart";
export default function Charts({ temperature, humidity, soilmoisture }) {
  return (
    <>
      <div className="charts">
        <div>
          <GaugeChart
            id="gauge-chart1"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            arcWidth={0.3}
            percent={temperature >= 34 || temperature <= 15 ? 0.9 : 0.5}
          />
          <p>Temperature</p>
        </div>
        <div>
          <GaugeChart
            id="gauge-chart1"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            arcWidth={0.3}
            percent={humidity / 100}
          />
          <p>Humidity</p>
        </div>
        <div>
          <GaugeChart
            id="gauge-chart1"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            arcWidth={0.3}
            percent={soilmoisture / 100}
          />
          <p>Soil moisture</p>
        </div>
      </div>
    </>
  );
}
