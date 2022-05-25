import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <h1 className="text-capitalize font-weight-bold">
            SELECT ANY
            <h2 className="text-blue">PRODUCT</h2>
          </h1>
        </div>
      </div>
    );
  }
}
