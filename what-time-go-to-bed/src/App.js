import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import Activities from './Activities';
import AddActivities from './AddActivities'
import moment from 'moment'

class MapContainer extends React.Component {
  state = {
    // showAddActivities: 'add-activity-hidden',
    // showAddActivities: false,
    startLocation: '',
    finalDestination: '',
    newActivityTitle: '',
    newActivityTime: '',
    travelTime: 0,
    activities: [
    ],
    activitiesTime: 0,
    visibleStartLocation: '',
    visibleFinalDestination: '',
    startAndEndDesFormat: 'start-and-end-des-hidden'
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
          // debugger
          if (response.rows[0].elements[0].duration.text.split(' ').length > 2 ) {
            var travelDuration = (Number(response.rows[0].elements[0].duration.text.split(' ')[0]) * 60) + Number(response.rows[0].elements[0].duration.text.split(' ')[2])
          } else if (response.rows[0].elements[0].status !== "ZERO_RESULTS") {
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

  handleNewActivityTitle = e => {
    console.log(e.target.value)
    this.setState({
      newActivityTitle: e.target.value
    })
  }

  handleNewActivityTime = e => {
    console.log(e.target.value)
    this.setState({
      newActivityTime: e.target.value
    })
  }

  addActivityClick = (name, time) => {
    // debugger
    // e.preventDefault()
    // const {newActivityTitle, newActivityTime} = this.state
    var timeToNumber = Number(time)

    // console.log(this.state.activities)
    // console.log(this.state.activitiesTime)

    this.setState({
      activities:  [...this.state.activities, {name: name, time: timeToNumber}],
      activitiesTime: 10
    })
    
  }

  displayAddActivityInputClick = e => {
    e.preventDefault()
    const {showAddActivities} = this.state
    if (showAddActivities === 'add-activity-hidden') {
      this.setState({
        showAddActivities: 'add-activity-display'
      })
    } else {
      this.setState({
        showAddActivities: 'add-activity-hidden'
      })
    }
    
  }

  handleFigureoutTimeForBed = () => {
    console.log('Time for bed button working')
    
   
    this.state.activities.forEach(activity => {
      this.state.activitiesTime = this.state.activitiesTime + activity.time
    })
    var activitiesAndTravelTime = this.state.activitiesTime + this.state.travelTime

    var whatTimeYouNeedToBeSomewhere = moment().set({'hour': 0, 'minute': (4 * 60), 'second': 0})
    whatTimeYouNeedToBeSomewhere.format('LT')

    var wakeUpTime = whatTimeYouNeedToBeSomewhere.subtract(activitiesAndTravelTime, 'minutes')
    wakeUpTime.format('LT')

    var amountOfSleepWanted = 8 * 60

    var gotToBedTime = wakeUpTime.subtract(amountOfSleepWanted, 'minute')

    console.log(gotToBedTime.format('LT'))
  }

  handleAddTravelDestination = () => {
    console.log('handle Add Travel Destination')
    const {startLocation, finalDestination, startAndEndDesFormat} = this.state
    this.setState({
      visibleStartLocation: startLocation,
      visibleFinalDestination: finalDestination,
      startAndEndDesFormat: 'start-and-end-des-visible'
    })
  }


  render() {
    const { activities, startAndEndDesFormat } = this.state

    return (
      <div className="App">
        <h1>What time to go to Bed?</h1>
        <div className={startAndEndDesFormat}>Your start location: {this.state.visibleStartLocation}</div>
        <div className={startAndEndDesFormat}>Your final destination: {this.state.visibleFinalDestination}</div>
        
          { activities.map(activity => (
            <Activities data={activity} key={activity.name} />
          ))
          }
          <hr/>
          <div>How much sleep do you want tonight?</div>
          <div>hours<input type="text"/></div>
          <div>minutes<input type="text"/></div>
          <button>add amount of sleep</button>
          <hr/>

          <div>What time do you need to be at your final destination?</div>
          <div>hours<input type="text"/> : minutes<input type="text"/> AM</div>
          <button>add time</button>
          <hr/>

          <div>Your starting location</div>
          <input onChange={this.handleStartLocationChange}  type="text"/>
          <div>Your final destination</div>
          <input onChange={this.handleFinalDestinationChange} type="text"/>
          <div><button onClick={this.handleAddTravelDestination}>Add travel destination</button></div>

          <hr/>

        {/* <form onSubmit={this.handleSubmit} action="">
          <div>Time {this.state.travelTime}</div>
          <div>Your starting location</div>
          <input onChange={this.handleStartLocationChange} type="text"/>
          <div>Your final destination</div>
          <input onChange={this.handleFinalDestinationChange}  type="text"/>
          <div><button>Calculate</button></div>
        </form> */}

          <hr/>
          <div>Will you be doing any activities in the morning?</div>
          <AddActivities  onAdd={this.addActivityClick} />
          
          <hr/>
          <button onClick={this.handleFigureoutTimeForBed}>Calculate Time for Bed?</button>
      </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCha11ARLYwPGdsg7_RCac7mcfv9a8GwRM'
})(MapContainer)
