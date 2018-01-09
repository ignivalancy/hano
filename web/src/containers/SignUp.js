import React, { Component } from 'react';
import { Paper, FlatButton, RaisedButton, TextField, SelectField, MenuItem } from 'material-ui';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { register } from '../redux/modules/app';

class SignUp extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    role: 'user'
  };
  handleClick = () => {
    this.props.register(this.state);
  };
  render() {
    return (
      <div style={styles.container}>
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <Paper style={styles.form} zDepth={1}>
          <TextField
            fullWidth
            hintText="Enter your Name"
            floatingLabelText="Name"
            onChange={(event, newValue) => this.setState({ fullName: newValue })}
          />
          <br />
          <TextField
            type="email"
            fullWidth
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <br />
          <TextField
            type="password"
            fullWidth
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) => this.setState({ password: newValue })}
          />
          <br />
          <SelectField
            floatingLabelText="Role"
            fullWidth
            value={this.state.role}
            onChange={(event, index, newValue) => this.setState({ role: newValue })}
          >
            <MenuItem value="user" primaryText="User" />
            <MenuItem value="business" primaryText="Business" />
          </SelectField>
          <RaisedButton
            label="Sign Up"
            fullWidth
            secondary
            style={styles.button}
            onClick={this.handleClick}
          />
        </Paper>
        <FlatButton label="Go to Sign In" fullWidth containerElement={<Link to="/signin" />} />
      </div>
    );
  }
}

const styles = {
  container: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  form: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  button: {
    float: 'right',
    marginTop: 20
  }
};

const mapDispatchToProps = {
  register
};

export default connect(null, mapDispatchToProps)(SignUp);
