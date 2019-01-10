import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from '../Firebase';

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  pushNotification = () => {};

  componentDidMount() {
    this.setState({ loading: true });
    console.log('admin');
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      let usersList = [];
      if (usersObject) {
        usersList = Object.keys(usersObject).map(key => ({
          ...usersObject[key],
          uid: key,
        }));
      }

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <h1>Admin</h1>
        <button onClick={this.pushNotification}>Push notification</button>
        <div>Notifications: {users.length}</div>
        {loading ? <div>Loading ...</div> : <UserList users={users} />}
      </div>
    );
  }
}

AdminPage.propTypes = {};

export default withFirebase(AdminPage);
