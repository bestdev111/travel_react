import React, { Component } from "react";
import { Layout, Input, Button, Radio, Select } from "antd";
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
const { Option } = Select;

class Register extends Component {
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
                padding: "20px 40px",
                borderRadius: "20px",
                boxShadow: "5px 5px 5px 5px gray",
                marginBottom: "10px",
              }}
            >
              <div
                class="LeftSpace"
                style={{ width: "40%", marginRight: "40px" }}
              >
                <img src={logo}></img>
                <br />
                <h1 style={{ color: "#000", fontWeight: "bold" }}>
                  Get Started
                </h1>
                <br />
                <a style={{ color: "#000", fontWeight: "bold" }}>
                  Already have an account?
                </a>

                <a style={{ color: "#000", textDecoration: "underline" }}>
                  Sign in
                </a>
                <br />
                <Input
                  placeholder="Full Name"
                  style={{
                    borderBottom: "1px solid gray",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                <br />
                <Input
                  placeholder="Email"
                  style={{
                    borderBottom: "1px solid gray",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                <br />
                <Input
                  placeholder="Password"
                  style={{
                    borderBottom: "1px solid gray",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                <br />
                <Input
                  placeholder="Enter your phone no."
                  style={{
                    borderBottom: "1px solid gray",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                <br />
                <Input
                  placeholder="Enter the otp"
                  style={{
                    borderBottom: "1px solid gray",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                <br />
                <Select
                  defaultValue="1"
                  style={{ width: "100%", height: "40px", marginTop: "15px" }}
                >
                  <Option value="1">Choose the account</Option>
                </Select>

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
                    -----------------------------------Or login
                    by----------------------------------
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
              <div class="RightSpace" style={{ paddingTop: "90px" }}>
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
                    height: "100px",
                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    border: "1px solid #d4d0cf",
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

export default Register;
