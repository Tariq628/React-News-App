
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
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
   pageSize = 5;
  //  apikey = "ba8551c420f14d84a6541f06250a6376";
   apikey = process.env.REACT_APP_NEWS_API
   state = {
     progress: 0
   }
   setProgress = (progress)=>{
     this.setState({progress:progress})
   }
  render() {
    return(
      <Router>
      <Navbar/>
      <LoadingBar
      height={3}
      color='#f11946'
      progress={this.state.progress}
      />
      <div>
      <Routes>
        {/* <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={5} country="in" category="general"/>} /> */}
        <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="business" pageSize={6} country="in" category="business"/>} />
        <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="no" pageSize={5} country="in" category="general"/>}/>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="entertainment" pageSize={6} country="in" category="entertainment"/>} />
        <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="general" pageSize={6} country="in" category="general"/>} />
        <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="health" pageSize={6} country="in" category="health"/>} />
        <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="science" pageSize={6} country="in" category="science"/>} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="sports" pageSize={6} country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="technology" pageSize={6} country="in" category="technology"/>} />
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
