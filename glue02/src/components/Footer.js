import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>Storm O'Bryant <br></br>Check me out on <a href='https://github.com/NunuMarie3000'>Github</a> <br></br>&copy;StormyWeatherCreations, {this.props.year}</footer>
      </>
    )
  }
}
