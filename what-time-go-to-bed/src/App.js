import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'

class MapContainer extends React.Component {
  state = {
    startLocation: '',
    finalDestination: '',
    travelTime: 0
  }

  handleSubmit = e => {
    e.preventDefault()
    const {startLocation} = this.state
    const {finalDestination} = this.state
    console.log(startLocation)
    console.log(finalDestination)
    const { google } = this.props
    const service = new google.maps.DistanceMatrixService()
      service.getDistanceMatrix(
        {
          origins: [startLocation],
          destinations: [finalDestination],
          travelMode: 'DRIVING'
        },
        (response, status) => {
          console.log('response', response)
          console.log('status', status)
          if (response.rows[0].elements[0].duration.text.split(' ').length > 2 ) {
            var travelDuration = (Number(response.rows[0].elements[0].duration.text.split(' ')[0]) * 60) + Number(response.rows[0].elements[0].duration.text.split(' ')[2])
          } else if (response.rows[0].elements[0].status !== "ZERO_RESULTS") {
            // travelDuration !== null
            travelDuration = Number(response.rows[0].elements[0].duration.text.split(' ')[0])
          } else {
            console.log('error')
          }
          
          this.setState({
            travelTime: travelDuration
          })
        }
      )
  }

  handleStartLocationChange = e => {
    this.setState({
      startLocation: e.target.value
    })
  }

  handleFinalDestinationChange = e => {
    this.setState({
      finalDestination: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>What time to go to Bed?</h1>
        <form onSubmit={this.handleSubmit} action="">
          <div>Time {this.state.travelTime}</div>
          <div>Your starting location</div>
          <input onChange={this.handleStartLocationChange} type="text"/>
          <div>Your final destination</div>
          <input onChange={this.handleFinalDestinationChange}  type="text"/>
          <div><button>Calculate</button></div>
        </form>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCha11ARLYwPGdsg7_RCac7mcfv9a8GwRM'
})(MapContainer)
