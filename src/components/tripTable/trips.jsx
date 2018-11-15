import React, { Component } from "react";
import { Table } from "reactstrap";
import "./tripTable.css";

class TripTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appName: "JP Trip Exchange"
    };
  }

  render() {
    return (
      <React.Fragment>
        <Table striped className="trip-table">
          <thead>
            <tr className="d-flex">
              <th className="trip-headers col-1">Trip No.</th>
              <th className="trip-headers col-3">Bus Company</th>
              <th className="trip-headers col-1">Plate Number</th>
              <th className="trip-headers col-4">Destination</th>
              <th className="trip-headers col-1">Dep. Time</th>
              <th className="trip-headers col-1">Gate</th>
              <th className="trip-headers col-1">Bay</th>
            </tr>
          </thead>
          <tbody>
            <tr className="d-flex">
              <td className="col-1">14344</td>
              <td className="col-3">Baliwag Transit</td>
              <td className="col-1">ABK2444</td>
              <td className="col-4">Baguio</td>
              <td className="col-1">0100</td>
              <td className="col-1">12</td>
              <td className="col-1">12</td>
            </tr>
            <tr className="d-flex">
              <td className="col-1">14252</td>
              <td className="col-3">Victory Liner</td>
              <td className="col-1">XTK996</td>
              <td className="col-4">Sagada</td>
              <td className="col-1">0100</td>
              <td className="col-1">09</td>
              <td className="col-1">23</td>
            </tr>
            <tr className="d-flex">
              <td className="col-1">24252</td>
              <td className="col-3">Genesis</td>
              <td className="col-1">UOP153</td>
              <td className="col-4">Vigan</td>
              <td className="col-1">0100</td>
              <td className="col-1">10</td>
              <td className="col-1">16</td>
            </tr>
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default TripTable;
