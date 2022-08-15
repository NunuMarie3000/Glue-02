import React, { Component } from 'react'

import jsonData from './data.json'

import './Components.css'

import Person from './Person'

import { /*Carousel, */ Form, Button } from 'react-bootstrap'

import profilePic from './media/twitter-no-profile.jpg'

export default class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cards: jsonData,
    }
  }

  //i wanna create a function to filter through jsonData based on the user's input
  handleChange = (e) =>{
    const searchedName = e.target.value
    //filter through jsonData
    //if i check obj.last_name/obj.first_name/obj.email with whatever is being typed, it'll search for all items matching firstname/lastname/email
    //the line below is telling the compiler to stop yelling at me for not having a return value in that arrow function
    // eslint-disable-next-line
    const newCards = jsonData.filter((obj) => {
      if(searchedName === ''){
        return obj
      }else if(obj.last_name.toLowerCase().startsWith(searchedName.toLowerCase())){
        return obj
      }else if(obj.first_name.toLowerCase().startsWith(searchedName.toLowerCase())){
        return obj
      }else if(obj.email.toLowerCase().startsWith(searchedName.toLowerCase())){
        return obj
      }
    })
    this.setState({cards: newCards}, console.log(this.state.cards))
    //then map through newCards/this.state.cards in the render function
  }

  render() {
    return (
        <>
        <h1 className='friend-list'><i class="fa-solid fa-user-group"></i> Your friend list </h1>
          <Form className='input-form'>
            <Form.Group>
              <Form.Label>Who are you searching for?</Form.Label>
              <Form.Control type="text" placeholder="Search..." onChange={this.handleChange}/>
              <Form.Text>
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>

        {/* <Carousel>
        {this.state.cards.map(obj =>{ return <Carousel.Item>
          <Person img={profilePic} first_name={obj.first_name} last_name={obj.last_name} email={obj.email} city={obj.City} ip_address={obj.ip_address} key={obj.id}/>
          </Carousel.Item>
        })}
        </Carousel> */}

        <div className='returned-cards'>
        {this.state.cards.map(obj =>{ return <Person img={profilePic} first_name={obj.first_name} last_name={obj.last_name} email={obj.email} city={obj.City} ip_address={obj.ip_address} key={obj.id}/>})}
        </div>
        </>
    )
  }
}
