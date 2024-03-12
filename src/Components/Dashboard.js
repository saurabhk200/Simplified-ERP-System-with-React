import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css"; 
import DashboardPieChart from "./DashboardPieChart.js";

function Dashboard() {
  const availableStock = 500;
  const orders = 300;

  return (
    <div className="dashboard-container">
      <section className="hero">
        <h1>Welcome to ERP System</h1>
        <p className="dashboard-summary">Summary of key metrics/features...</p>
        <div className="hero-chart-table">
          <div className="chart">
            <Container>
              <Row>
                <Col>
                  <h2>Available Stock vs Orders</h2>
                  <DashboardPieChart
                    availableStock={availableStock}
                    orders={orders}
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Orders</th>
                  <th>Stock Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product 1</td>
                  <td>20</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Product 2</td>
                  <td>30</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Product 3</td>
                  <td>30</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Product 4</td>
                  <td>10</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Product 5</td>
                  <td>30</td>
                  <td>70</td>
                </tr>
                <tr>
                  <td>Product 6</td>
                  <td>32</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Product 7</td>
                  <td>44</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>Product 8</td>
                  <td>54</td>
                  <td>57</td>
                </tr>
                <tr>
                  <td>Product 9</td>
                  <td>34</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>Product 10</td>
                  <td>30</td>
                  <td>220</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
