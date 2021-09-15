import React, { Component } from "react";
import {
  Layout,
  Collapse,
  Tabs,
  Row,
  Col,
  Image,
  Typography,
  Button,
  Card,
  Rate,
  Select,
  Input,
} from "antd";
import {
  MinusSquareOutlined,
  PlusSquareOutlined,
  CaretRightOutlined,
  BorderlessTableOutlined,
  EnvironmentOutlined,
  AppstoreOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import Overview1 from "./Image/unnamed.png";
import Overview2 from "./Image/best-scenery-wallpapers-for-european-countries-desktop.png";
import Overview3 from "./Image/best-things-to-do-in-Niagara-Falls.png";
import Overview4 from "./Image/China-Mt-Fuji.png";
import Overview5 from "./Image/Thames-River-Cruise.png";
import Overview6 from "./Image/api201.png";

import tripDetails1 from "./Image/air-travel.png";

import map from "./Image/Rectangle 58.png";
import Checkbox from "antd/lib/checkbox/Checkbox";

const { Panel } = Collapse;
const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const { Title, Text } = Typography;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Travelpage extends Component {
  render() {
    return (
      <Content style={{ padding: "10px 50px" }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Overview" key="1">
            <Row>
              <Col span={18}>
                <Image width="inherit" src={Overview1} preview={false} />
              </Col>
              <Col
                span={6}
                style={{ border: "1px solid #DDD", padding: "50px 45px" }}
              >
                <Title level={3}>Details</Title>
                <br />
                <table>
                  <tr>
                    <td>
                      <Title level={5} style={{ color: "#2680eb" }}>
                        Duration
                      </Title>
                    </td>
                    <td style={{ width: "150px" }}>
                      <Title
                        level={5}
                        style={{ fontWeight: "normal", textAlign: "right" }}
                      >
                        11 days
                      </Title>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Title level={5} style={{ color: "#2680eb" }}>
                        States
                      </Title>
                    </td>
                    <td style={{ width: "150px" }}>
                      <Title
                        level={5}
                        style={{ fontWeight: "normal", textAlign: "right" }}
                      >
                        USA
                      </Title>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Title level={5} style={{ color: "#2680eb" }}>
                        City
                      </Title>
                    </td>
                    <td style={{ width: "150px" }}>
                      <Title
                        level={5}
                        style={{ fontWeight: "normal", textAlign: "right" }}
                      >
                        New York
                      </Title>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Title level={5} style={{ color: "#2680eb" }}>
                        Adult
                      </Title>
                    </td>
                    <td style={{ width: "150px" }}>
                      <Title
                        level={5}
                        style={{ fontWeight: "normal", textAlign: "right" }}
                      >
                        <MinusSquareOutlined style={{ fontSize: 15 }} /> 4{" "}
                        <PlusSquareOutlined style={{ fontSize: 15 }} />{" "}
                      </Title>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Title level={5} style={{ color: "#2680eb" }}>
                        Children
                      </Title>
                    </td>
                    <td style={{ width: "150px" }}>
                      <Title
                        level={5}
                        style={{ fontWeight: "normal", textAlign: "right" }}
                      >
                        <MinusSquareOutlined style={{ fontSize: 15 }} /> 4{" "}
                        <PlusSquareOutlined style={{ fontSize: 15 }} />{" "}
                      </Title>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Title level={5} style={{ color: "#2680eb" }}>
                        Senior Citizen
                      </Title>
                    </td>
                    <td style={{ width: "150px" }}>
                      <Title
                        level={5}
                        style={{ fontWeight: "normal", textAlign: "right" }}
                      >
                        <MinusSquareOutlined style={{ fontSize: 15 }} /> 4{" "}
                        <PlusSquareOutlined style={{ fontSize: 15 }} />{" "}
                      </Title>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ textAlign: "center" }}>
                      <Button
                        size="middle"
                        type="primary"
                        style={{ width: "-webkit-fill-available" }}
                      >
                        Book Now
                      </Button>
                    </td>
                  </tr>
                </table>
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                <Image
                  width={235}
                  src={Overview2}
                  preview={false}
                  style={{ padding: "10px" }}
                />
                <Image
                  width={235}
                  src={Overview3}
                  preview={false}
                  style={{ padding: "10px" }}
                />
                <Image
                  width={235}
                  src={Overview4}
                  preview={false}
                  style={{ padding: "10px" }}
                />
                <Image
                  width={235}
                  src={Overview5}
                  preview={false}
                  style={{ padding: "10px" }}
                />
                <Image
                  width={235}
                  src={Overview6}
                  preview={false}
                  style={{ padding: "10px" }}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Hotel" key="2">
            <Card
              size="small"
              title="Hotel Testing 1"
              extra={<Checkbox></Checkbox>}
              style={{ width: 300 }}
            >
              <p>
                <br />
                &nbsp;&nbsp;&nbsp;Price: RM200
              </p>
              <p>
                <br />
                &nbsp;&nbsp;&nbsp;Breakfast: <Checkbox>Yes</Checkbox>{" "}
                <Checkbox>No</Checkbox>
              </p>
              <p>
                <br />
                &nbsp;&nbsp;&nbsp;Room: <Checkbox>Single</Checkbox>{" "}
                <Checkbox>Double</Checkbox>
                <br />{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Checkbox>Child with Bed</Checkbox>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Checkbox>Child without Bed</Checkbox>
              </p>
            </Card>
            <br />
            <Card
              size="small"
              title="Hotel Testing 2"
              extra={<Checkbox></Checkbox>}
              style={{ width: 300 }}
            >
              <p>
                <br />
                &nbsp;&nbsp;&nbsp;Price: RM200
              </p>
              <p>
                <br />
                &nbsp;&nbsp;&nbsp;Breakfast: <Checkbox>Yes</Checkbox>{" "}
                <Checkbox>No</Checkbox>
              </p>
              <p>
                <br />
                &nbsp;&nbsp;&nbsp;Room: <Checkbox>Single</Checkbox>{" "}
                <Checkbox>Double</Checkbox>
                <br />{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Checkbox>Child with Bed</Checkbox>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Checkbox>Child without Bed</Checkbox>
              </p>
            </Card>
          </TabPane>
          <TabPane tab="Detail" key="3">
            Pickup location:{" "}
            <Select defaultValue="1">
              <Option value="1">Airport 1</Option>
              <Option value="2">Airport 2</Option>
            </Select>
            <br />
            <br />
            Flight Number:{" "}
            <Input style={{ width: "120px", height: "30px" }}></Input>
            <br />
            <br />
            ETA: <Input style={{ width: "120px", height: "30px" }}></Input>
            <br />
            <br />
            ETD: <Input style={{ width: "120px", height: "30px" }}></Input>
            <br />
            <br />
            Other:{" "}
            <Input
              style={{ width: "240px", height: "30px" }}
              placeholder="Enter location and time"
            ></Input>
          </TabPane>
          <TabPane tab="Pricing" key="4">
            <Card title="Package Price" style={{ width: 300 }}>
              <br />
              <p>&nbsp;&nbsp;&nbsp;Adult: RM2000</p>
              <p>&nbsp;&nbsp;&nbsp;Children: RM2000</p>
              <p>&nbsp;&nbsp;&nbsp;Senior Citizen: RM2000</p>
            </Card>
          </TabPane>
        </Tabs>
        <br />
        <br />
        <br />
        <br />
        <Collapse
          defaultActiveKey={["1", "2", "3", "4", "5"]}
          ghost
          expandIcon={({ isActive }) => (
            <CaretRightOutlined
              style={{ color: "blue" }}
              rotate={isActive ? 90 : 0}
            />
          )}
        >
          <Panel header="OVERVIEW" key="1">
            <div style={{ padding: "15px 25px" }}>
              <Row>
                <Col span={12}>
                  <Title level={5} style={{ fontWeight: "bolder" }}>
                    Highlight
                  </Title>
                  <br />
                  <table>
                    <tr>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                    </tr>
                    <tr>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                    </tr>
                    <tr>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                    </tr>
                    <tr>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                    </tr>
                    <tr>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                    </tr>
                    <tr>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                    </tr>{" "}
                    <tr>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                      <td>Lorem ipsum</td>
                    </tr>
                  </table>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <table class="tablePadding">
                    <tr>
                      <td>
                        <Title
                          level={5}
                          style={{ color: "#2680eb", fontWeight: "bolder" }}
                        >
                          {" "}
                          <BorderlessTableOutlined /> Tour Code
                        </Title>
                      </td>
                      <td>
                        <Title level={5} style={{ fontWeight: "normal" }}>
                          {" "}
                          1214234{" "}
                        </Title>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Title
                          level={5}
                          style={{ color: "#2680eb", fontWeight: "bolder" }}
                        >
                          {" "}
                          <EnvironmentOutlined />
                          Departure City
                        </Title>
                      </td>
                      <td>
                        <Title level={5} style={{ fontWeight: "normal" }}>
                          {" "}
                          San Francisco{" "}
                        </Title>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Title
                          level={5}
                          style={{ color: "#2680eb", fontWeight: "bolder" }}
                        >
                          {" "}
                          <AppstoreOutlined /> Tour Type
                        </Title>
                      </td>
                      <td>
                        <Title level={5} style={{ fontWeight: "normal" }}>
                          {" "}
                          By Air{" "}
                        </Title>
                      </td>
                    </tr>
                  </table>
                </Col>
                <Col span={12}>
                  <Image
                    src={map}
                    preview={false}
                    style={{ marginBottom: 5 }}
                  />
                  <br />

                  <table class="tablePadding">
                    <tr>
                      <td>
                        <Title
                          level={5}
                          style={{ color: "#2680eb", fontWeight: "bolder" }}
                        >
                          {" "}
                          <ClockCircleOutlined /> Duration{" "}
                        </Title>
                      </td>
                      <td>
                        <Title level={5} style={{ fontWeight: "normal" }}>
                          {" "}
                          11 days{" "}
                        </Title>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Title
                          level={5}
                          style={{ color: "#2680eb", fontWeight: "bolder" }}
                        >
                          {" "}
                          <EnvironmentOutlined />
                          End City
                        </Title>
                      </td>
                      <td>
                        <Title level={5} style={{ fontWeight: "normal" }}>
                          {" "}
                          San Francisco{" "}
                        </Title>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Title
                          level={5}
                          style={{ color: "#2680eb", fontWeight: "bolder" }}
                        >
                          {" "}
                          <GlobalOutlined /> Language
                        </Title>
                      </td>
                      <td>
                        <Title level={5} style={{ fontWeight: "normal" }}>
                          {" "}
                          Chinese{" "}
                        </Title>
                      </td>
                    </tr>
                  </table>
                </Col>
              </Row>
            </div>
          </Panel>
          <Panel header="TRIP DETAILS" key="2">
            <Card
              bordered={true}
              style={{ width: "85%", marginBottom: "10px" }}
            >
              <Row style={{ width: "100%" }}>
                <Col
                  span={8}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={tripDetails1} height={"100%"} preview={false} />
                  <Title
                    level={2}
                    style={{
                      fontWeight: "border",
                      color: "white",
                      position: "absolute",
                      zIndex: 1,
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    Day <br /> 01{" "}
                  </Title>
                </Col>
                <Col style={{ padding: 50 }} span={16}>
                  <Title level={4} style={{ fontWeight: "border" }}>
                    {" "}
                    San Francisco{" "}
                  </Title>
                  <p>Hotel : Cormfort in suites New Town Bar</p>
                  <p style={{ textAlign: "right" }}>
                    <ClockCircleOutlined style={{ color: "blue" }} /> 12:45 am
                  </p>
                </Col>
              </Row>
            </Card>

            <Card
              bordered={true}
              style={{ width: "85%", marginBottom: "10px" }}
            >
              <Row style={{ width: "100%" }}>
                <Col
                  span={8}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={tripDetails1} height={"100%"} preview={false} />
                  <Title
                    level={2}
                    style={{
                      fontWeight: "border",
                      color: "white",
                      position: "absolute",
                      zIndex: 1,
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    Day <br /> 02{" "}
                  </Title>
                </Col>
                <Col style={{ padding: 50 }} span={16}>
                  <Title level={4} style={{ fontWeight: "border" }}>
                    {" "}
                    San Francisco{" "}
                  </Title>
                  <p>Hotel : Cormfort in suites New Town Bar</p>
                  <p style={{ textAlign: "right" }}>
                    <ClockCircleOutlined style={{ color: "blue" }} /> 12:45 am
                  </p>
                </Col>
              </Row>
            </Card>

            <Card bordered={true} style={{ width: "85%" }}>
              <Row style={{ width: "100%" }}>
                <Col
                  span={8}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={tripDetails1} height={"100%"} preview={false} />
                  <Title
                    level={2}
                    style={{
                      fontWeight: "border",
                      color: "white",
                      position: "absolute",
                      zIndex: 1,
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    Day <br /> 03{" "}
                  </Title>
                </Col>
                <Col style={{ padding: 50 }} span={16}>
                  <Title level={4} style={{ fontWeight: "border" }}>
                    {" "}
                    San Francisco{" "}
                  </Title>
                  <p>Hotel : Cormfort in suites New Town Bar</p>
                  <p style={{ textAlign: "right" }}>
                    <ClockCircleOutlined style={{ color: "blue" }} /> 12:45 am
                  </p>
                </Col>
              </Row>
            </Card>
          </Panel>
          <Panel header="HOTEL SELECTION" key="3">
            <Card bordered={true} style={{ width: "85%", marginBottom: 10 }}>
              <Row
                style={{
                  width: "100%",
                  paddingLeft: "40px",
                  paddingTop: "20px",
                }}
              >
                <Col span={8}>
                  <Title level={2}> Sheltonia </Title>
                </Col>
              </Row>
              <Row
                style={{
                  width: "100%",
                  paddingLeft: "40px",
                  paddingTop: "20px",
                }}
              >
                <Col span={24}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td>
                        <p>
                          <b>Room</b> : Dual Tripper
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Bed</b> : 2 King Size
                        </p>
                      </td>
                      <td>
                        <p>
                          <Rate
                            style={{ textAlign: "right" }}
                            allowHalf
                            defaultValue={2.5}
                          />
                        </p>
                      </td>
                    </tr>
                  </table>
                </Col>
              </Row>
            </Card>
            <Card bordered={true} style={{ width: "85%", marginBottom: 10 }}>
              <Row
                style={{
                  width: "100%",
                  paddingLeft: "40px",
                  paddingTop: "20px",
                }}
              >
                <Col span={8}>
                  <Title level={2}> Sheltonia </Title>
                </Col>
              </Row>
              <Row
                style={{
                  width: "100%",
                  paddingLeft: "40px",
                  paddingTop: "20px",
                }}
              >
                <Col span={24}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td>
                        <p>
                          <b>Room</b> : Dual Tripper
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Bed</b> : 2 King Size
                        </p>
                      </td>
                      <td>
                        <p>
                          <Rate
                            style={{ textAlign: "right" }}
                            allowHalf
                            defaultValue={2.5}
                          />
                        </p>
                      </td>
                    </tr>
                  </table>
                </Col>
              </Row>
            </Card>
            <Card bordered={true} style={{ width: "85%" }}>
              <Row
                style={{
                  width: "100%",
                  paddingLeft: "40px",
                  paddingTop: "20px",
                }}
              >
                <Col span={8}>
                  <Title level={2}> Sheltonia </Title>
                </Col>
              </Row>
              <Row
                style={{
                  width: "100%",
                  paddingLeft: "40px",
                  paddingTop: "20px",
                }}
              >
                <Col span={24}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td>
                        <p>
                          <b>Room</b> : Dual Tripper
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Bed</b> : 2 King Size
                        </p>
                      </td>
                      <td>
                        <p>
                          <Rate
                            style={{ textAlign: "right" }}
                            allowHalf
                            defaultValue={2.5}
                          />
                        </p>
                      </td>
                    </tr>
                  </table>
                </Col>
              </Row>
            </Card>
          </Panel>
          <Panel header="PICK-UP DETAILS/ TRANSFERS" key="4">
            <div style={{ padding: "10px 40px" }}>
              <Title level={5} style={{ fontWeight: "bold" }}>
                {" "}
                SFO Arrival
              </Title>
              <Title level={5} style={{ fontWeight: "bold" }}>
                {" "}
                Pickup Time:
              </Title>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata
              </p>
            </div>
          </Panel>
          <Panel header="WHAT'S INCLUDED" key="5">
            <div style={{ padding: "10px 40px" }}>
              <table style={{ width: "100%" }}>
                <tr>
                  <td>
                    <Title level={5} style={{ fontWeight: "bold" }}>
                      {" "}
                      Package Includes
                    </Title>
                  </td>
                  <td>
                    <Title level={5} style={{ fontWeight: "bold" }}>
                      {" "}
                      Package Excludes
                    </Title>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>
                      ✔️Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
                    </p>
                  </td>
                  <td>
                    <p>
                      ❌Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>
                      ✔️Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
                    </p>
                  </td>
                  <td>
                    <p>
                      ❌Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>
                      ✔️Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
                    </p>
                  </td>
                  <td>
                    <p>
                      ❌Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>
                      ✔️Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
                    </p>
                  </td>
                  <td>
                    <p>
                      ❌Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </Panel>
        </Collapse>
      </Content>
    );
  }
}

export default Travelpage;
