import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {
  static async getInitialProps({ req }) {
    const response = await axios.get('http://localhost:3000/api/users')
    const data = response.data
    return {
      AllUsers: data
    }
  }
  render() {
    return (
      <div>
        {this.props.AllUsers.map(user => <li key={user._id}>{user.name}</li>)}
      </div>
    )
  }
}

export default Users
