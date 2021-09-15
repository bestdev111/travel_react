import React, { Component } from "react";
import { Layout, Input } from "antd";
import footerImg1 from "./Image/footerImage1.png";
import mastercard from "./Image/mastercard.png";
import visa from "./Image/visacard.png";

import "./style.css";

const { Footer } = Layout;

class CustFooter extends Component {
  render() {
    return (
      <Footer style={{padding:0}}>
        <div className="footerRow">
          <img src={footerImg1}></img>
        </div>
        <div className="footerRow2">
          <div className="footerImage">
            <img src={mastercard}></img>
            <br />
            <br />
            <img src={visa}></img>
          </div>

          <div className="footerCol">
            <text className="heading">ABOUT US</text>
            <br />
            <a className="word">Site</a>
            <br />
            <a className="word">Careers</a>
            <br />
            <a className="word">Brand Ambassador</a>
            <br />
            <a className="word">Blog</a>
            <br />
            <a className="word">Travel Blog</a>
            <br />
            <a className="word">Rewards</a>
            <br />
            <a className="word">Term & conditions</a>
            <br />
            <a className="word">Insurance</a>
            <br />
          </div>

          <div className="footerCol">
            <text className="heading">DISCOVER</text>
            <br />
            <a className="word">Travelling</a>
            <br />
            <a className="word">Careers</a>
            <br />
            <a className="word">Brand Ambassador</a>
            <br />
            <a className="word">Blog</a>
            <br />
            <a className="word">Travel Blog</a>
            <br />
            <a className="word">Rewards</a>
            <br />
            <a className="word">Term & conditions</a>
            <br />
            <a className="word">Insurance</a>
            <br />
          </div>

          <div className="footerCol">
            <text className="heading">HELP CENTER</text>
            <br />
            <a className="word">Site</a>
            <br />
            <a className="word">Careers</a>
            <br />
            <a className="word">Brand Ambassador</a>
            <br />
            <a className="word">Blog</a>
            <br />
          </div>
        </div>
      </Footer>
    );
  }
}

export default CustFooter;
