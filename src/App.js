// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
 
  pageSize=8;
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }

  setProgress=(progress)=>{ 
     this.setState({progress: progress})
  }


  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
       height={3}
        color='#ff0000'
        progress={this.state.progress}
      />
      <Routes>
        
        {/* <Route  path='/ge' element={<News  setProgres={this.setProgress} apiKey={this.apiKey} key={general} pageSize={8} country={'in'} category={'general'}/>} />
        <Route exact path='/' element={<News  setProgres={this.setProgress} apiKey={this.apiKey} key={general} pageSize={8} country={'in'} category={'general'}/>} /> */}
        <Route   path='/general' element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key={'general'} pageSize={this.pageSize} country={'in'} category={'general'}/>}/>
        <Route   path='/about'  element= {<About  category={'about'} />}  />
        <Route  exact path='/business' element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key={'business'} pageSize={this.pageSize} country={'in'} category={'business'}/>} />
        <Route  exact path='/entertainment' element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key={'entertainment'} pageSize={this.pageSize} country={'in'} category={'entertainment'}/>} />
        <Route  exact path='/health' element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key={'health'} pageSize={this.pageSize} country={'in'} category={'health'}/>}/>
        <Route  exact path='/science' element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key={'science'} pageSize={this.pageSize} country={'in'} category={'science'}/>}/>
        <Route  exact path='/sports'  element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key={'sports'} ageSize={this.pageSize} country={'in'} category={'sports'}/>}/>
        <Route  exact path='/technology' element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key={'technology'} pageSize={this.pageSize} country={'in'} category={'technology'}/>}/>


      </Routes>
      </Router>
      </>
    );
  
  }
}


