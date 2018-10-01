import React, { Component } from "react";

import UserService from './../../services/UserService';

export default class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.UserService = new UserService();

    this.state = {
      users: this.UserService.defaultUsers
    };
  }

  render() {
    return (
      <div className="pearon-users">
        <h1>Pearson User Management</h1>
        {/* Render users here */}
      </div>
    );
  }
}
