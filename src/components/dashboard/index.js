import React, { Component } from 'react';
import DashboardLayout from '../../layout/dashboard';
import { Row, Col } from 'react-bootstrap';
import GearIcon from 'mdi-react/GearIcon';
import TrendUpArrow from 'mdi-react/ArrowUpwardIcon';
import TrendDownArrow from 'mdi-react/ArrowDownwardIcon';

class Dashboard extends Component {
  render() {
    return (
      <DashboardLayout>
        <div className="panel-container">
          <div className="panel-box">
            <div className="panel-box--header">
              <Row>
                <Col xs={10}>
                  <h2>Revenue</h2>
                  <h3>
                    Tracked: month-over-month
                  </h3>
                </Col>
                <Col xs={2} className="text-right">
                  <GearIcon />
                </Col>
              </Row>
            </div>
            <div className="panel-box--content">
              <Row>
                <Col xs={4}>
                  <span className="panel-box--label">Goal</span>
                </Col>
                <Col xs={8} className="text-right">
                  <span className="target">$4,000</span>
                  <span className="target-value--label"> USD</span>
                </Col>
              </Row>
              <div className="panel-box--separator"></div>
              <Row>
                <Col xs={6}>
                  <TrendUpArrow className="up-trend" />
                  <span className="target-reach">$2,000</span>
                  <span className="target-value--label"> USD</span>
                  <div className="target-potential-value">Contracted</div>
                </Col>
                <Col xs={6} className="text-right">
                  <span className="target-reach">$2,000</span>
                  <span className="target-value--label"> USD</span>
                  <div className="target-potential-value">Warm Leads</div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="panel-box"></div>
          <div className="panel-box"></div>
        </div>
      </DashboardLayout>
    )
  }
}

export default Dashboard;