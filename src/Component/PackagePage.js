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

import photo644 from "./Image/Group 644.png";
import photo645 from "./Image/Group 645.png";
import photo646 from "./Image/Group 646.png";

const { Content } = Layout;
const { Panel } = Collapse;

const marks = {
  0: "$650",
  100: "$1585",
};

class PackagePage extends Component {
  render() {
    return (
      <Content>
        <div class="packageRow1">
          <br></br>
          <br></br>
          <div
            style={{
              width: "750px",
              display: "flex",
              flexDirection: "row",
            }}
            class="packageRow2"
          >
            <div class="contentRow1txt2textbox">
              <Input
                size="middle"
                placeholder="Where do you want to go"
                bordered="false"
                prefix={<EnvironmentOutlined />}
              />
            </div>
            <button class="searchBtn">Search</button>
          </div>

          <br></br>
          <br></br>
        </div>
        <br></br>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                border: "1px gray solid",
                width: "325px",
                marginLeft: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <text
                style={{
                  color: "#2680eb",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "20px",
                }}
              >
                Filter your search
              </text>
            </div>
            <div
              style={{
                border: "1px gray solid",
                width: "325px",
                marginLeft: "10px",
              }}
            >
              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel header="Name" key="1">
                  <Input
                    size="small"
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                  />
                </Panel>
              </Collapse>
            </div>
            <div
              style={{
                border: "1px gray solid",
                width: "325px",
                marginLeft: "10px",
              }}
            >
              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel header="Country" key="1">
                  <Input
                    size="small"
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                  />
                  <Checkbox>US</Checkbox>
                  <br />
                  <Checkbox>United Kingdom</Checkbox>
                  <br />
                  <Checkbox>Malaysia</Checkbox>
                  <br />
                  <Checkbox>China</Checkbox>
                  <br />
                </Panel>
              </Collapse>
            </div>
            <div
              style={{
                border: "1px gray solid",
                width: "325px",
                marginLeft: "10px",
              }}
            >
              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel header="State" key="1">
                  <Input
                    size="small"
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                  />
                  <Checkbox>New York</Checkbox>
                  <br />
                  <Checkbox>Newark</Checkbox>
                  <br />
                  <Checkbox>Cleveland</Checkbox>
                  <br />
                  <Checkbox>Cleveland</Checkbox>
                  <br />
                </Panel>
              </Collapse>
            </div>
            <div
              style={{
                border: "1px gray solid",
                width: "325px",
                marginLeft: "10px",
              }}
            >
              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel header="Date" key="1">
                  <Input size="small" placeholder="23 Nov 2021" />
                </Panel>
              </Collapse>
            </div>
            <div
              style={{
                border: "1px gray solid",
                width: "325px",
                marginLeft: "10px",
              }}
            >
              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel header="Price" key="1">
                  <Slider marks={marks} defaultValue={37} />
                </Panel>
              </Collapse>
            </div>
            <div
              style={{
                border: "1px gray solid",
                width: "325px",
                marginLeft: "10px",
              }}
            >
              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel header="Tags" key="1">
                  <Tag color="blue">From: New York</Tag>
                  <Tag color="blue">Stay: 8 days</Tag>
                </Panel>
              </Collapse>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={photo644}></img>
              <img src={photo645}></img>
              <img src={photo646}></img>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={photo644}></img>
              <img src={photo645}></img>
              <img src={photo646}></img>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={photo644}></img>
              <img src={photo645}></img>
              <img src={photo646}></img>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

export default PackagePage;
