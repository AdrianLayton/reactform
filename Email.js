import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EmailContainer from './EmailContainer.js'
import EmailForm from './EmailForm.js';
import EmailTitle from './EmailTitle.js';
import EmailSubtitle from './EmailSubtitle.js';
import EmailForm from './EmailForm.js';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      emailText: 'enter email address',
      email: '',
      gdpr: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push('/sign-up');
  }
  render() {
    return (
        <EmailContainer
          <EmailForm onSubmit={this.handleSubmit}>
            <EmailTitle />
            <div className="tab-des">
              <EmailSubtitle />
              <EmailInputs />
              <Gdpr />
            </div>
          </EmailForm>
        </EmailContainer
    )
  }
}
export default withRouter(Email);