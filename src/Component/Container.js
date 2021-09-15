import React, { Component } from "react";
import { Layout, Input } from "antd";

import CustHeader from "./CustHeader";
import CustFooter from "./CustFooter";
import Homepage from "./Homepage";
import PackagePage from "./PackagePage";
import CreateAccount from "./CreateAccount";
import Travel from "./Travelpage";
import Register from "./Register";
import Payment from "./Payment";

import "./style.css";
import Travelpage from "./Travelpage";

const { Content, Footer } = Layout;

class Container extends Component {
  render() {
    return (
      <Layout>
        <CustHeader />
        <br />
        <br />
        <Homepage />
        <Payment />
        <CreateAccount />
        <Travel />
        <Travelpage />
        <CustFooter />
      </Layout>
    );
  }
}

export default Container;
