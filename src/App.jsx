import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AirLine from "./airline/AirLine";
import Navbar from "./app/Navbar";
import Passenger from "./passenger/Passenger";
import './common/style.css';
import AirLineFormPage from "./airline/AirLineForm";
import PassengeForm from './passenger/PassengerForm';

export default function BasicExample() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={AirLine} />
          <Route exact path="/passenger" component={Passenger} />
          <Route exact path='/airLineform' component={AirLineFormPage}/>
          <Route exact path='/passengerform' component={PassengeForm}/>
        </Switch>
      </Router>
    </>
  );
}
