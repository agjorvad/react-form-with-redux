import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SnackForm from './SnackForm';
import SnackList from './SnackList';

class App extends Component {
  render() {
    return (
      <div className="App">
<h3>Snacks</h3>
<SnackForm />
<SnackList />
      </div>
    );
  }
}

export default connect()(App);
