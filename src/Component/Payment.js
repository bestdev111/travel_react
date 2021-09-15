import React, { Component } from "react";
import {
  Layout,
  Input,
  Button,
  Image,
  Collapse,
  Checkbox,
  Slider,
  Tag,
} from "antd";
import { EnvironmentOutlined, SearchOutlined } from "@ant-design/icons";

import photo644 from "./Image/canada2.png";
import photo645 from "./Image/Group 645.png";
import photo646 from "./Image/Group 646.png";

const { Content } = Layout;
const { Panel } = Collapse;

const marks = {
  0: "$650",
  100: "$1585",
};

class Payment extends Component {
  render() {
    return (
      <Content>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 40,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #DDD",
              borderRadius: 10,
            }}
          >
            <img src={photo644} style={{ width: 400 }}></img>
            <div style={{ margin: 30 }}>
              <h3>Package Name : Penang</h3>
              <h3>Adults : 1</h3>
              <h3>Total : RM 1000</h3>
            </div>
          </div>
          <div style={{ margin: 30, width: "15%" }}>
            <Input
              placeholder="Card Number"
              style={{
                borderBottom: "1px solid gray",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            />
            <br />
            <br />
            <br />
            <Input
              placeholder="CVV"
              style={{
                borderBottom: "1px solid gray",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            />
            <br />
            <br />
            <br />

            <Input
              placeholder="CardHolder Name"
              style={{
                borderBottom: "1px solid gray",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
      </Content>
    );
  }
}

export default Payment;
