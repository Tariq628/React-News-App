
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
 class App extends React.Component {
  render() {
    return(
      <div>
      <Navbar/>
      <News pageSize={5} country="in"/>
      </div>
    )
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
// #endregion

export default App;
