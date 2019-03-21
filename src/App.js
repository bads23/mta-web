import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Button from './app/common/buttons/buttons'
import Header from './app/common/header/header'
import Footer from './app/common/header/footer'
import { MyProvider } from './context'

import Home from './app/common/index'

class App extends Component {

  state = {
    time: {}
  }

  getDay = (num) => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[num];
  }

  getMonth = (num) => {
    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[num];
  }

  componentDidMount() {
    var obj = new Date()
    var today = {
      date: obj.getDate(),
      day: this.getDay(obj.getDay()),
      year: obj.getFullYear(),
      month: this.getMonth(obj.getMonth())
    }

    this.setState({
      time: today
    })
  }

  render() {
    return (
      <>
        <Router>

          <MyProvider value={this.state.time}>
            <Header />

          </MyProvider>
          <Route exact path="/" component={Home} />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;