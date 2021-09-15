import React, { Component } from "react";
import { Layout, Input, Button, Radio } from "antd";
import {
  DownloadOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import normalacc from "./Image/NormalAcc.jpeg";
import salesteam from "./Image/SalesTeam.jpeg";
import yes from "./Image/Yes.jpeg";
import logo from "./Image/Group 630.png";

import "./style.css";

const { Content } = Layout;

class CreateAccount extends Component {
  state = {
    size: "large",
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <Content>
        <div class="SpaceHeader">
          <a style={{ color: "#000", fontWeight: "bold" }}>Choose Account</a>
          <br />
          <a style={{ color: "#000" }}>
            Discover What you could achieve with Just in Mind
          </a>
        </div>
        <div>
          <div
            class="Space1"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div style={{ marginRight: "40px" }}>
              <img src={normalacc}></img>
            </div>
            <div>
              <img src={salesteam}></img>
            </div>
          </div>
          <div class="Space2">
            <div class="register"></div>
            <div
              class="Space3"
              style={{
                padding: "40px 40px",
                borderRadius: "20px",
                boxShadow: "5px 5px 5px 5px gray",
                marginBottom: "10px",
              }}
            >
              <div class="LeftSpace" style={{ width: "40%" }}>
                <img src={logo}></img>
                <br />
                <h1 style={{ color: "#000", fontWeight: "bold" }}>Sign In</h1>
                <h4>Email</h4>
                <Input
                  placeholder="Enter email here"
                  style={{
                    borderBottom: "1px solid gray",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                <br />
                <h4>Password</h4>
                <Input
                  placeholder="Enter password here"
                  style={{
                    borderBottom: "1px solid gray",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                <br />
                <div style={{ textAlign: "right" }}>
                  <a
                    style={{
                      color: "black",
                      fontSize: "15px",
                      textDecoration: "underline",
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Button
                    type="primary"
                    shape="round"
                    style={{ width: "100%", height: "50px" }}
                  >
                    <h1 style={{ color: "white" }}>Login</h1>
                  </Button>

                  <br />
                  <a style={{ color: "black", fontSize: "15px" }}>
                    --------------------------------Or login
                    by---------------------------------
                  </a>
                  <br />
                  <a style={{ marginRight: "10px" }}>
                    <GoogleOutlined />
                  </a>
                  <a style={{ marginRight: "10px" }}>
                    <FacebookOutlined />
                  </a>
                </div>
              </div>
              <div class="RightSpace" style={{}}>
                <img
                  src={yes}
                  style={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                ></img>
                <br />
                <div
                  style={{
                    textAlign: "center",
                    border: "2px solid #888",
                    height: "100px",
                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                  }}
                >
                  <a style={{ color: "#000", fontWeight: "bold" }}>
                    Create Your Own Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

export default CreateAccount;
