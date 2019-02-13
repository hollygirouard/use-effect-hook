import React from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

export default class ClassBasedComponent extends React.Component {
  state = {
    users: [],
  }

  async componentDidMount() {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      this.setState({ users: response.data })
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      this.setState({ users: response.data })
    }
  }

  render () {
    const { users } = this.state
    return (
      <Container>
        {
          users.map((user) => (
            <ul key={ user.id }>
              <li>
                { user.name }
              </li>
            </ul>
          ))
        }
      </Container>
    )
  };
};
