import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'

export default class App extends Component {
state = {
    progress : 0
 }
setProgress=(progress)=>{
  this.setState({progress : progress})
}
  render() {
    return (
            <BrowserRouter>
            <LoadingBar
                color='#f11946'
                progress={this.state.progress}
                height={5}
                loaderSpeed={1500}
                transitionTime={1500}
              />
              <Navbar/>
              
              <Routes>
                  <Route exact path="/" element={<News setProgress={this.setProgress} category="general" key={1} />} />
                  <Route exact path="/sport" element={<News setProgress={this.setProgress}  category="sports" key={2} />} />
                  <Route exact path="/health" element={<News setProgress={this.setProgress} category="health" key={3} />} />
                  <Route exact path="/bussiness" element={<News setProgress={this.setProgress} category="business" key={4} />} />
              </Routes>
            </BrowserRouter>
          );
  }
}
