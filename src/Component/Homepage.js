import React, { Component } from "react";
import { Layout, Input, Button, Image } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

import homepageRow2 from "./Image/homepageRow2.png";
import shuratower from "./Image/Shura Tower.png";
import londontower from "./Image/london tower.png";
import seaview from "./Image/seaview.png";
import centralmall from "./Image/centralmall.png";
import dubai from "./Image/DUBAI.png";
import manila from "./Image/manila.png";
import canada from "./Image/canada.png";
import canada2 from "./Image/canada2.png";
import siberia from "./Image/siberia.png";
import photo644 from "./Image/Group 644.png";
import photo645 from "./Image/Group 645.png";
import photo646 from "./Image/Group 646.png";
import photo647 from "./Image/Group 647.png";
import photo648 from "./Image/Group 648.png";
import photo649 from "./Image/Group 649.png";
import photo650 from "./Image/Group 650.png";
import photo651 from "./Image/Group 651.png";
import dubaioffer from "./Image/dubai offer.png";
import burjulkhalifaoffer from "./Image/burjulkhalifaoffer.png";
import manilaoffer from "./Image/manilaoffer.png";
import welingtonoffer from "./Image/welingtonoffer.png";

const { Content } = Layout;

class Homepage extends Component {
  render() {
    return (
      <Content>
        <div className="contentRow1">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div class="contentRow1txt">
            <text>Explore Europe Tours From London</text>
          </div>
          <div class="contentRow1txt1">
            <text>Let the fun begin. 12000+ Affordable Adventures.</text>
          </div>
          <div class="contentRow1txt2">
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <div class="contentRow2">
          <img src={homepageRow2}></img>
        </div>
        <br />
        <br />
        <br />
        <div class="contentRow3">
          <text>Explore the World</text>
        </div>

        <div class="contentRow4">
          <text>
            Select a popular travel destination below to discover exclusive
            trips backed by our low price guarantee.
          </text>
        </div>
        <br />
        <div class="contentSelection">
          <text
            class="selection"
            style={{
              fontWeight: "bold",
              color: "#2680EB",
              borderBottom: "2px solid #FFC406",
            }}
          >
            Trending
          </text>
          <text class="selection">North America</text>
          <text class="selection">Latin America</text>
          <text class="selection">Europe</text>
          <text class="selection">Ocenia</text>
          <text class="selection">Asia</text>
        </div>

        <div style={{ padding: 60 }}>
          <table>
            <tr>
              <td style={{ width: "270px" }}>
                <img
                  src={shuratower}
                  alt=""
                  style={{ width: "inherit", height: "inherit" }}
                ></img>
              </td>

              <td
                style={{ height: "466px", width: "595px" }}
                colSpan="2"
                rowSpan="2"
              >
                <img
                  src={londontower}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                ></img>
              </td>

              <td style={{ width: "270px" }}>
                <img
                  src={seaview}
                  style={{ width: "inherit", height: "inherit" }}
                ></img>
              </td>
              <td rowSpan={2} style={{ width: "270px", height: "466px" }}>
                <img
                  src={centralmall}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                ></img>
              </td>
            </tr>

            <tr>
              <td>
                <img src={dubai} style={{ width: "270px" }}></img>
              </td>
              <td>
                <img src={manila} alt="" style={{ width: "270px" }}></img>
              </td>
            </tr>

            <tr>
              <td colSpan={2} style={{ width: "540px", height: "233px" }}>
                <img
                  src={canada}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                ></img>
              </td>
              <td style={{ width: "270px" }}>
                <img
                  src={canada2}
                  alt=""
                  style={{ width: "inherit", height: "inherit" }}
                ></img>
              </td>
              <td colspan="2" style={{ width: "540px", height: "233px" }}>
                <img
                  src={siberia}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                ></img>
              </td>
            </tr>
          </table>
        </div>

        <br />
        <br />

        <div style={{ textAlign: "center" }}>
          <button class="exploreBtn">Explore All Destinations</button>
        </div>

        <div style={{ textAlign: "center" }}>
          <text
            style={{ color: "#2680EB", fontSize: "43px", fontWeight: "bold" }}
          >
            New Packages
          </text>
        </div>

        <div style={{ textAlign: "center" }}>
          <text style={{ color: "#707070", fontSize: "22px" }}>
            We've made a list of suggested activities based on your interests
          </text>
        </div>

        <br />
        <br />
        <br />

        <div style={{ width: "90vw", marginLeft: "9vw" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={photo644}></img>
            <img src={photo645}></img>
            <img src={photo646}></img>
            <img src={photo647}></img>
          </div>
        </div>

        <div style={{ width: "90vw", marginLeft: "9vw" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={photo648}></img>
            <img src={photo649}></img>
            <img src={photo650}></img>
            <img src={photo651}></img>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <text
            style={{ color: "#2680EB", fontSize: "43px", fontWeight: "bold" }}
          >
            Special Promo Tours
          </text>
        </div>

        <div style={{ textAlign: "center" }}>
          <text style={{ color: "#707070", fontSize: "22px" }}>
            New Era Begins With Traveling The Most Famous Places
          </text>
        </div>

        <br></br>
        <br></br>

        <div style={{ marginLeft: "3%" }}>
          <table>
            <tr>
              <td style={{ width: "711px", height: "314px" }}>
                <img
                  src={dubaioffer}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </td>
              <td style={{ width: "711px", height: "314px" }}>
                <img
                  src={burjulkhalifaoffer}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </td>
            </tr>

            <tr>
              <td style={{ width: "711px", height: "314px" }}>
                <img
                  src={manilaoffer}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </td>
              <td style={{ width: "711px", height: "314px" }}>
                <img
                  src={welingtonoffer}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </td>
            </tr>
          </table>
        </div>
      </Content>
    );
  }
}

export default Homepage;
