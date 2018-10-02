import React, { Component } from 'react';

import User from '../user/User';

import UserService from './../../services/UserService';

export default class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
    this.UserService = new UserService();

    this.state = {
      users: this.UserService.defaultUsers
    };
  }

  async getUsers() {
    const users = await this.UserService.getUsers();

    this.setState(prevState => {
      const allUsers = [...prevState.users, ...users];

      return {
        users: this.removeDuplicateUsers(allUsers)
      }
    });
  }

  componentDidMount() {
    this.getUsers();
  }

  removeDuplicateUsers(users, prop = 'id') {
    return users.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter(user => user.id !== id )
    });
  }

  render() {
    return (
      <div>
        <h1 className= "heading">Pearson User Management</h1>
        <div className= "container">
          {
            this.state.users.map((user) =>
              <User
                key= {user.id}
                user= {user}
                onDelete= {this.deleteUser}
              />
            )
          }
        </div>
      </div>
    );
  }
}
