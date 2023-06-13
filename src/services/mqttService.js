import React, { Component } from "react";
import mqtt from "precompiled-mqtt";

export class Mqtt extends Component {
  responseTopicAll = "biogas/server/response/all/wavelength";
  responseTopicSelected = "biogas/server/response/select/multi/sensors";
  responseTopicSingle = "biogas/server/response";
  responseTopicNormalized = "biogas/server/response/normlized";
  responseTopicCSV = "biogas/server/response/csv";

  clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

  host = "ws://broker.emqx.io:8083/mqtt";

  options = {
    keepalive: 160,
    clientId: this.clientId,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    connectTimeout: 30 * 1000,
    will: {
      topic: "WillMsg",
      payload: "Connection Closed abnormally..!",
      qos: 0,
      retain: false,
    },
  };

  shouldComponentUpdate() {
    return false;
  }

  client = mqtt.connect(this.host, this.options);
  constructor(checkData) {
    super(checkData);

    console.log("Connecting mqtt client");
    this.client.on("connect", () => {
      console.log("Connected");
      this.client.subscribe(this.responseTopicSingle, { qos: 0 });
      this.client.subscribe(this.responseTopicAll, { qos: 0 });
      this.client.subscribe(this.responseTopicSelected, { qos: 0 });
      this.client.subscribe(this.responseTopicNormalized, { qos: 0 });
      this.client.subscribe(this.responseTopicCSV, { qos: 0 });
    });

    this.client.on("reconnect", () => {
      this.client.subscribe(this.responseTopicSingle, { qos: 0 });
      this.client.subscribe(this.responseTopicAll, { qos: 0 });
      this.client.subscribe(this.responseTopicSelected, { qos: 0 });
      this.client.subscribe(this.responseTopicNormalized, { qos: 0 });
      this.client.subscribe(this.responseTopicCSV, { qos: 0 });

      console.log("Reconnecting...");
    });

    this.client.on("message", (topic, message, packet) => {
      if (topic === this.responseTopicSingle) {
        try {
          if (message) {
            localStorage.setItem("mqttResponseDataSingle", message);
            this.checkData();
          }
        } catch (err) {
          console.error("Error getting response:", err);
        }
      } else if (topic === this.responseTopicAll) {
        try {
          if (message) {
            localStorage.setItem("mqttResponseDataAll", message);
            // this.checkData();
          }
        } catch (err) {
          console.error("Error getting response:", err);
        }
      }
      if (topic === this.responseTopicSelected) {
        try {
          if (message) {
            localStorage.setItem("mqttResponseDataSelected", message);
            this.checkData();
          }
        } catch (err) {
          console.error("Error getting response:", err);
        }
      } else {
        console.error("Some Error Occured While Getting The Message");
      }

      if (topic === this.responseTopicNormalized) {
        try {
          if (message) {
            localStorage.setItem("mqttResponseDataNormalized", message);
            this.checkData();
          }
        } catch (err) {
          console.error("Error getting response:", err);
        }
      } else {
        console.error("Some Error Occured While Getting The Message");
      }

      if (topic === this.responseTopicCSV) {
        try {
          if (message) {
            localStorage.setItem("mqttResponseDataCSV", message);
            this.checkData();
          }
        } catch (err) {
          console.error("Error getting response:", err);
        }
      } else {
        console.error("Some Error Occured While Getting The Message");
      }
    });
  }

  requestData(topic, message) {
    this.client.publish(topic, message, { qos: 0 });
    console.log(topic, "Topic");
    console.log(message, "Data published");
  }

  render() {
    return <div></div>;
  }
}

export default Mqtt;
