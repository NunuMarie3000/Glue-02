import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class Person extends Component {
    constructor(props){
        super(props);
        this.state ={
            likes : 0
        }
    }

    updateLikes(){
        this.setState((prev)=>({
            likes: prev.likes + 1
        }))
    }

    render() {
        return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.img} />
            <Card.Body>
            <Card.Title>{this.props.first_name} {this.props.last_name} <i class="fa-solid fa-heart"></i> {this.state.likes}</Card.Title>
            <Card.Text>
                Email: {this.props.email}<br></br>
                City: {this.props.city}<br></br>
                IP Address: {this.props.ip_address}
            </Card.Text>
            <Button onClick={()=>this.updateLikes()} variant="primary">Like</Button> 
            </Card.Body>
        </Card><br></br>
        </>
    )
  }
}
