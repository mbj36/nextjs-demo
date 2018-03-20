import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {
  static async getInitialProps({ req }) {
    const response = await axios.get('https://api.github.com/users')
    const data = response.data
    return {
      AllUsers: data
    }
  }
  render() {
    return (
      <div>
        {this.props.AllUsers.map(user => (
          <li key={user.id}>
            <img height="100px" src={user.avatar_url} />
          </li>
        ))}
      </div>
    )
  }
}

export default Users
