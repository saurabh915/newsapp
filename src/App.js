// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
// import NewsItem from './components/NewsItem';
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default class App extends Component {
apikey = process.env.REACT_APP_NEWS_API

state ={
  progress:0
}
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
<>
        <Router>
      <div>
        {<NavBar />}
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route  exact path="/" element={ <>  <News setProgress=  {this.setProgress} apikey={this.apikey} key ="general" pageSize={4} category="general" named="saur" /></>}/>
              {/* //this pageSize will be transfered as prop; */}
             
 
            <Route  exact path="/business" element={  <News setProgress=  {this.setProgress} apikey={this.apikey}
            key ="business" pageSize={4} category="business" named="saur" />}>
              </Route>
            <Route exact path="/entertainment" element={    <News setProgress=  {this.setProgress} apikey={this.apikey} key ="entertainment"  pageSize={4} category="entertainment" named="saur" />}/>
            
            
            <Route  exact path="/science" element= {  <News setProgress=  {this.setProgress} apikey={this.apikey} key ="science" pageSize={4} category="science" named="saur" />}/>
              
           
            <Route  exact path="/health" element={   <News setProgress=  {this.setProgress} apikey={this.apikey} key ="health" pageSize={4} category="health" named="saur" />}/>
             
           
           
            <Route exact path="/sports" element={    <News setProgress=  {this.setProgress} apikey={this.apikey}  key ="sports"pageSize={4} category="sports" named="saur" />}/>
            
            
            <Route  exact path="/technology"element ={  <News setProgress=  {this.setProgress} apikey={this.apikey}
            key ="technology" pageSize={4} category="technology" named="saur" />}/>
              
           
          </Routes>
      </div>
</Router>
          
        
      </>
    );
  }
}
