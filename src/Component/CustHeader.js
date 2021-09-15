import React, { Component } from "react";
import { Layout, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import logo from "./Image/logo.png";
import phone from "./Image/phoneoutline.png";
import cart from "./Image/cartoutline.png";
import user from "./Image/useroutline.png";

import "./style.css";

const { Header } = Layout;

class CustHeader extends Component {
  render() {
    return (
      <Header style={{ padding: 0 }}>
        <div className="container">
          <div className="col">
            <img src={logo} className="img"></img>
          </div>
          <div className="col">
            <a style={{ color: "white" }}>DESTINATION</a>
          </div>
          <div className="col">
            <a style={{ color: "white" }}>PACKAGE</a>
          </div>
          <div className="col">
            <a style={{ color: "white" }}>SPECIAL</a>
          </div>
          <div className="col1">
            <Input
              size="large"
              placeholder="Search"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="col2">
            <img src={phone}></img>
          </div>
          <div className="col3">
            <img src={cart}></img>
          </div>
          <div className="col3">
            <img src={user}></img>
          </div>
        </div>
      </Header>
    );
  }
}

export default CustHeader;
