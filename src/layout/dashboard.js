import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../assets/styles/global.css';
import history from '../utils/history';
import MenuIcon from 'mdi-react/MenuIcon';
import Drawer from 'material-ui/Drawer';
import { Row, Col } from 'react-bootstrap';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'mdi-react/AddIcon';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { has_valid_token, set_invalid_token } from '../actions/auth';
import { fetch_projects_list, create_new_project } from '../actions/projects';
import BookmarkIcon from 'mdi-react/BookmarkIcon';

class DashboardLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawer_open: false,
      project_dialog_open: false,
      panel_dialog_open: false,
      projects: {},
      new_project_name: '',
    }

    this.handle_input_update = this.handle_input_update.bind(this);
  }

  componentWillMount() {
    this.props.actions.has_valid_token();
    if (this.props.valid_user_token === false) {
      this.logout();
    }
    this.props.actions.fetch_projects_list();
  }

  logout = () => {
    this.props.actions.set_invalid_token();
    localStorage.removeItem('auth_token');
    history.push('/sign-in');
  }

  toggleDrawer = () => {
    this.setState({ drawer_open: !this.state.drawer_open })
  }

  render_floating_add_icon = () => {
    const float_icon_styles = {
      position: 'absolute',
      bottom: '3%',
      right: '5%',
    }

    const menu_styles = {
      backgroundColor: '#f03e81',
      color: 'rgba(255,255,255,1)',
    }

    return (
      <span>
        <IconMenu
          menuStyle={menu_styles}
          style={float_icon_styles}
          iconButtonElement={
            <FloatingActionButton
              secondary={true}
            >
              <AddIcon />
            </FloatingActionButton>
          }
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <MenuItem primaryText="Project" onClick={this.handle_project_dialog} />
          <MenuItem primaryText="Panel" onClick={this.handle_panel_dialog} />
        </IconMenu>
      </span>
    )
  }

  handle_project_dialog = () => {
    this.setState({ project_dialog_open: !this.state.project_dialog_open })
  }

  handle_panel_dialog = () => {
    this.setState({ panel_dialog_open: !this.state.panel_dialog_open })
  }

  handle_input_update = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  do_create_new_project = () => {
    const project = { name: this.state.new_project_name };
    this.props.actions.create_new_project(project);
    this.handle_project_dialog();
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
          width={250}
          open={this.state.drawer_open}
          onRequestChange={(drawer_open) => this.setState({ drawer_open })}
        >
          <Row>
            <Col xs={12}>
              <div className="dashboard-sidebar-user-image"></div>
              <div className="dashboard-sidebar-user-name text-center">
                Hello {this.props.current_user.first_name}!
                <span onClick={this.logout} className="logout-text-link">Logout</span>
              </div>
            </Col>
            <Col xs={12}>
              <div className="dashboard-sidebar-section--header">
                <BookmarkIcon /> Projects
              </div>
            </Col>
            <Col xs={12}>
              <ul>
                {this.props.projects.list.map((project) => {
                  return (
                    <li key={project.code} className="list-link">
                      {project.name}
                    </li>
                  )
                })}
              </ul>
            </Col>
          </Row>
        </Drawer>
        {this.render_floating_add_icon()}

        <div className="dashboard-content">
          {this.props.children}
        </div>

        <Dialog
          modal={true}
          open={this.state.project_dialog_open}
        >
          <TextField
            name="new_project_name"  
            hintText="Project Name"
            floatingLabelText="Project Name"
            fullWidth={true}
            onChange={this.handle_input_update}
          />
          <div className="dialog-footer">
            <RaisedButton
              className="dialog-btn dialog-btn--secondary"
              secondary={true}
              onClick={this.do_create_new_project}
              width={150}
            >
              Save Project
            </RaisedButton>
            <RaisedButton
              className="dialog-btn"
              onClick={this.handle_project_dialog}
            >
              Close
            </RaisedButton>
          </div>
        </Dialog>

        <Dialog
          modal={true}
          open={this.state.panel_dialog_open}
        >
          Adding a panel dialog.
          <div>
            <RaisedButton onClick={this.handle_panel_dialog}>Close</RaisedButton>
          </div>
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    valid_user_token: state.users.valid_user_token,
    current_user: state.users.current_user,
    projects: state.projects,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      has_valid_token,
      set_invalid_token,
      fetch_projects_list,
      create_new_project,
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
