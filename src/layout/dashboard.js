import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../assets/styles/global.css';
import { has_valid_token, set_invalid_token } from '../actions/auth';
import history from '../utils/history';
import MenuIcon from 'mdi-react/MenuIcon';
import Drawer from 'material-ui/Drawer';
import { Row, Col } from 'react-bootstrap';

class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer_open: false
    }
  }

  componentWillMount() {
    this.props.actions.has_valid_token();
    if (this.props.valid_user_token === false) {
      this.logout();
    }
  }

  logout = () => {
    this.props.actions.set_invalid_token();
    localStorage.removeItem('auth_token');
    history.push('/sign-in');
  }

  toggleDrawer = () => {
    this.setState({drawer_open: !this.state.drawer_open})
  }

  render() {
    return (
      <div className="fluid-container">
        <div className="dashboard-menu-bar">
          <MenuIcon className="menu-icon" onClick={this.toggleDrawer} />
        </div>
        <Drawer
          containerClassName="dashboard-sidebar"  
          docked={false}
          width="20%"
          open={this.state.drawer_open}
          onRequestChange={(drawer_open) => this.setState({drawer_open})}
        >
          <Row>
            <Col xs={12}>
              <div className="dashboard-sidebar-user-image"></div>
              <div className="dashboard-sidebar-user-name text-center">
                Hello {this.props.current_user.first_name}!
                <span onClick={this.logout} className="logout-text-link">Logout</span>
              </div>
            </Col>
          </Row>
        </Drawer>
        <div className="dashboard-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    valid_user_token: state.users.valid_user_token,
    current_user: state.users.current_user,
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      has_valid_token,
      set_invalid_token,
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
