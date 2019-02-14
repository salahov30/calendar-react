import React, { Component } from 'react';
import Calendar from './components/Calendar';

class App extends Component {
  state = {
    date: null
  }

  handleDateChange = date => this.setState({ date })

  render() {
    return (
      <React.Fragment>
        <Calendar />
      </React.Fragment>
    );
  }
}

export default App;
