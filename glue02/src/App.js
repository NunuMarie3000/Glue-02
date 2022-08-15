import React, { Component } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './components/Components.css'

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Header/>
        <div className='main-container'>
          <Main/>
        </div>
        <Footer year={2022}/>
      </div>
    )
  }
}

