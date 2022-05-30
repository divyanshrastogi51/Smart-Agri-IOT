const mqtt = require("mqtt");

var client = mqtt.connect("ws://broker.emqx.io");

client.on("connect", function () {
  client.subscribe("Shirish");

  console.log("Client subscribed ");
});

client.on("message", function (topic, message) {
  console.log(message.toString());
});
