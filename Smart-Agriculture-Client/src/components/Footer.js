import React from "react";

const Footer = () => {
  return (
    <div className="cards">
      <div className="card">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCODENVE579"
        >
          <img
            src="http://banners.wunderground.com/cgi-bin/banner/ban/wxBanner?bannertype=pws250&weatherstationcount=KCODENVE579"
            width="250"
            height="150"
            border="0"
            alt="Weather Underground PWS KCODENVE579"
          />
        </a>
      </div>
      <div className="card">
        <h3 className="card-title">Smart Agriculture | Additional Info</h3>
        <p className="card-summary">
          Data updating from IoT weather sensors, wherever they're connected.
          This dashboard is built using React and Chart.js.
        </p>
      </div>
      <div className="card">
        <h3 className="card-title">Useful Links</h3>
        <ul className="card-summary">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              Github Repo
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              Project Report
            </a>
          </li>
          {/* <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              MQTT
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
