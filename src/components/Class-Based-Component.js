import React from 'react';
import { Container, Button, Row } from 'reactstrap';
import axios from 'axios';

export default class ClassBasedComponent extends React.Component {
  state = {
    users: [],
    showDetails: false,
  };

  async componentDidMount() {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      this.setState({ users: response.data })
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      this.setState({ users: response.data })
    }
  };

  handleClick = () => {
    this.setState({ showDetails: ! this.state.showDetails })
  };

  render () {
    const { users } = this.state
    return (
      <Container>
        {
          users.map((user) => (
            <ul key={ user.id }>
              <li>
                <strong>{ user.name }</strong>
                <div>
                  <Button
                    onClick={ this.handleClick }
                  >
                    { this.state.showDetails ? "Close Additional Info" : "More Info"  }
                </Button>
                 { this.state.showDetails &&
                   <Container className="additional-info">
                     <Row>
                       { `Email: ${ user.email }` }
                     </Row>
                     <Row>
                       { `Phone: ${ user.phone }` }
                     </Row>
                     <Row>
                       { `Website: ${ user.website }` }
                     </Row>
                   </Container>
                 }
                </div>
              </li>
            </ul>
          ))
        }
      </Container>
    )
  };
};
