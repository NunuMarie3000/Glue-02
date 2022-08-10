import React, { Component } from 'react'

import './Components.css'

import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const popover = (
  <Popover id="popover-basic">
  {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
  <Popover.Body>
    I'm sorry, this link doesn't go anywhere
  </Popover.Body>
</Popover>
);

export default class Header extends Component {
  render() {
    return (
      <>
        <h2>bookFace <i class="fa-brands fa-square-facebook"></i></h2>
        <nav className='navbar'>
        <OverlayTrigger trigger='click' placement='bottom' overlay={popover}><a href='#'>Home</a></OverlayTrigger>
        <OverlayTrigger trigger='click' placement='bottom' overlay={popover}><a href='#'>About</a></OverlayTrigger>
        <OverlayTrigger trigger='click' placement='bottom' overlay={popover}><a href='#'>Legal Info</a></OverlayTrigger>
        </nav>
      </>
    )
  }
}
