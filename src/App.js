import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newslist from './components/Newslist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default class App extends Component {
  constructor(){
    super()
    this.state ={
      mode: 'light'
    }
  }
   changeMode = () =>{
    if(this.state.mode == 'Light'){
      this.setState({mode:'dark'})
      console.log("dark")
    }else{
      this.setState({mode:'light'})
      console.log("light")
    }
   }
  render() {
    return (
      <>
      <BrowserRouter>
          <Navbar mode ={this.state.mode} changeMode={this.changeMode}/>
          <div className="container" mode ={this.state.mode}>
            <h3 className="text-center display-4 my-3" mode ={this.state.mode}>NEWS BASKET</h3>
            <Routes>
              <Route path='/' element=<Newslist key="general" category="general" country="in" pageSize="9" mode={this.state.mode}/>/>
              <Route path='/Entertainment' element=<Newslist key="entertainment" category="entertainment" country="in" pageSize="9" mode={this.state.mode}/>/>
              {/* <Route path='/Entertainment' element=<Newslist key="science" category="science" country="in" pageSize="9" mode={this.state.mode}/>/> */}
              <Route path='/sports' element=<Newslist key="sports" category="sports" country="in" pageSize="9" mode={this.state.mode}/>/>
            </Routes>
          </div>
          </BrowserRouter>
      </>
    )
  }
}
