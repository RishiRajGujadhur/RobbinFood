import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions'
import SessionFormV3 from './session_formv3'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionFormV3);