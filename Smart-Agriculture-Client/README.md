# ClimaStatus

The IoT weather station dashboard.
By [Dan Beerman](https://www.danbeerman.com)

---

ClimaStatus is a Personal Weather Station registered through Weather Underground. The app is hosted using a continuous deployment strategy with Netlify.

- Presentation Video: [g70 Capstone Showcase](https://youtu.be/OQbGKI5RDhY)
- View the app: [Live Dashboard App](http://climastatus.netlify.com/)
- View the WU Station:[The Eiber Station](https://www.wunderground.com/personal-weather-station/dashboard?ID=KCODENVE579)

### Check It:

![Visual Aid](./climaStatus.gif)

### Technologies:

- Raspberry Pi Model 3 B
  - Sense HAT Sensor (formerly Astro Pi)
  - Raspian Stretch Distro
  - Python
- Amazon Web Services
  - Elastic Cloud Compute (EC2)
  - Node + Express js
  - Mongo DB Atlas Cluster
- ClimaStatus Dashboard
  - Netlify deployment strategy
  - Chart.js
  - React

### Installation:

You'll have to build your own sensor and server for that data - but this dashboard will run and keep you updated on my temperature/soilmoisture/humidity

```
git clone [this repo]
cd [this repo's folder]

npm install
npm start
```

#### Reference Materials:

- [Raspberry Pi](https://www.raspberrypi.org/)
- [Astro Pi](https://astro-pi.org/)
- [ClimaStatus API](https://github.com/lebeerman/ClimaStatus-API)
- [Register a Personal Weather Station](https://www.wunderground.com/personal-weather-station/)
- [Icons](https://www.flaticon.com/)
- [Coding the sensors: John Wargo](https://makezine.com/projects/raspberry-pi-weather-station-mount)

---
