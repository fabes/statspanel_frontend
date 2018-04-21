import React, { Component } from 'react';
import '../assets/styles/global.css';

class DashboardLayout extends Component {
  render() {
    return (
      <div className="fluid-container">
        {this.props.children}
      </div>
    )
  }
}

export default DashboardLayout;
