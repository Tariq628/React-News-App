
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
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
      <Router>
      <Navbar/>
      
      <div>
      <Routes>
        {/* <Route path="/" element={<News pageSize={5} country="in" category="general"/>} /> */}
        <Route exact path="/business" element={<News key="business" pageSize={6} country="in" category="business"/>} />
        <Route exact path="/" element={<News pageSize={5} country="in" category="general"/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment"/>} />
        <Route exact path="/general" element={<News key="general" pageSize={6} country="in" category="general"/>} />
        <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="health"/>} />
        <Route exact path="/science" element={<News key="science" pageSize={6} country="in" category="science"/>} />
        <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology"/>} />
      </Routes>
      </div>
      </Router>
    )
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
// #endregion

export default App;
