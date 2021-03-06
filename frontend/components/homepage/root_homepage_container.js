import { connect } from 'react-redux';

import RootHomepage from './root_homepage'
import { logout } from '../../actions/session_actions'

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: session.id
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootHomepage);
