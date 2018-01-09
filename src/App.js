import React, { Component } from 'react';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import schema from './schema.json';
import uischema from './uischema.json';
import JsonFormsRenderer from '@jsonforms/core';
import '@jsonforms/core';
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
        Bound data:
        <pre>{this.props.dataAsString}</pre>
        <div className="demoform">
          <JsonFormsRenderer
            schema={schema}
            uischema={uischema}
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
