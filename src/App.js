import React, { Component } from 'react';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import { DispatchRenderer } from '@jsonforms/core';
import '@jsonforms/material-renderers';
import { connect } from 'react-redux';
import { getData } from '@jsonforms/core';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
        </header>
        <h1>{`Welcome to JSON Forms 2`}</h1>
        <p className="App-intro">
          More Forms. Less Code.
        </p>
        <div className="demoform">
          <DispatchRenderer
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  dataAsString: JSON.stringify(getData(state))
});
export default connect(
  mapStateToProps,
  null
)(App)
