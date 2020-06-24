import React from 'react';
import './session.scss'
import logo from '../../assets/logo.png'

class SessionForm extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action({...this.state});
  }
  update(field) { 
    return e => { 
      this.setState({[field]: e.currentTarget.value})
    }
  }

  render() { 
    const isSignUpForm = this.props.formType === 'Sign Up'
    return (
      <div className="row justify-content-center d-flex">
        <div className="session-content-container flex-column align-items-center d-flex">
          <img className="session-logo" src={logo} alt="logo" />
          <form onSubmit={this.handleSubmit}>
            {isSignUpForm && <div className="text">Sign up with your email</div>}
            {!isSignUpForm && <div className="text">Log in with your email</div>}
            <div className="input-fields">
              <input className="text-input"
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
              />
              <input className="text-input"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
              />
              <div className="text-danger">
                {this.props.errors.join(' ')}
              </div>
              <input className="btn btn-primary session-submit" type="submit" value="CONTINUE" />
            </div>
          
          </form>
          <div className="align-self-start reroute-message">
            {this.props.navLink}
          </div>
        </div>
      </div>
    )
  }
}

export default SessionForm; 