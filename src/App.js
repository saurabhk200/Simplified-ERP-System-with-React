import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Products from './Components/Product';
import Orders from './Components/Order';
import './App.css'; 

function App() {
    return (
        <Router>
            <div className="container">
                <header className="header">
                    <h1>ERP System</h1>
                </header>
                <nav className="navbar">
                    <a href="/">Dashboard</a>
                    <a href="/products">Products</a>
                    <a href="/orders">Orders</a>
                </nav>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/products" component={Products} />
                    <Route path="/orders" component={Orders} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
