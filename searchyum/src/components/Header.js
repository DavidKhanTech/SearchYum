import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li>
            <Link to="/">
              <a onClick="window.location.reload();">Home</a>
            </Link>
            <Link to="/Contact">Submit a recipe!</Link>
          </li>
        </ul>
      </div>
    );
  }
}
