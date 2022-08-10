import React, { Component } from 'react'

import jsonData from './data.json'

import './Components.css'

import Person from './Person'

import Carousel from 'react-bootstrap/Carousel'

import profilePic from './media/twitter-no-profile.jpg'

export default class Main extends Component {
  render() {
    return (
        <>
        <h1><i class="fa-solid fa-user-group"></i> Your friend list </h1>
        <Carousel className='carousel'>
        {jsonData.map(obj =>{ return <Carousel.Item>
          <Person img={profilePic} first_name={obj.first_name} last_name={obj.last_name} email={obj.email} city={obj.City} ip_address={obj.ip_address} key={obj.id}/>
          </Carousel.Item>
        })}
        </Carousel>
        </>
    )
  }
}
