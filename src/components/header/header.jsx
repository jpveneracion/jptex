import React, { Component } from "react";
import "./header.css";
import DisplayDate from "./comps/displayDate";
import { Row, Col } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteName: "jpx3m.com",
      date: new Date().getDay()
    };
    console.log(props);
  }

  render() {
    return (
      <Row className="header">
        <Col sm={{ size: 1 }}>
          <img src={"/images/logo.png"} alt="Terminal Exchange" />
        </Col>

        <Col sm={{ size: 1 }}>
          <h1 className="head-title">{this.state.siteName}</h1>
        </Col>
        <Col className="head-datetime" sm={{ size: 3, offset: 7 }}>
          <DisplayDate />
        </Col>
      </Row>
    );
  }
}

export default Header;
