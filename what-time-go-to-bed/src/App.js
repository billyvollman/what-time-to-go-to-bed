import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import Activities from './Activities';
import AddActivities from './AddActivities';
import Clock from './Clock';
import moment from 'moment'


// var timeNow = function() {
//   var hrs = moment().hour()
//   var mins = moment().minute()
//   var secs = moment().seconds()
//   console.log(`${hrs}:${mins}:${secs}`)
//   var time = `${hrs}:${mins}:${secs}`
//   currentTime[0] = time
// }

// setInterval( () => {
//   timeNow()
// }, 1000)

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
    visibleStartLocation: '',
    visibleFinalDestination: '',
    hideAndDisplayStartAndEndLocation: 'hidden-class',
    amountOfSleepWanted: 0,
    sleepHrs: 0,
    sleepMins: 0,
    hideAndDisplaySleepAmount: 'hidden-class',
    finalDestinationHrs: 0,
    finalDestinationMins: 0,
    whatTimeYouNeedToBeSomewhere: 0,
    whatTimeYouNeedToBeSomewhereDisplay: '',
    hideAndDisplayFinalDestTime: 'hidden-class',
    timeForBed: '',
    currentTime: []
  }

  handleAddTravelDestination = () => {
    console.log('handle Add Travel Destination')
    const {startLocation, finalDestination} = this.state

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
        // console.log('response', response)
        // console.log('status', status)
        // debugger
        if (response.rows[0].elements[0].duration.text.split(' ').length > 2 ) {
          var travelDuration = (Number(response.rows[0].elements[0].duration.text.split(' ')[0]) * 60) + Number(response.rows[0].elements[0].duration.text.split(' ')[2])
        } else if (response.rows[0].elements[0].status !== "ZERO_RESULTS") {
          travelDuration = Number(response.rows[0].elements[0].duration.text.split(' ')[0])
        } else {
          console.log('error')
        }
        
        this.setState({
          travelTime: travelDuration,
          visibleStartLocation: startLocation,
          visibleFinalDestination: finalDestination,
          hideAndDisplayStartAndEndLocation: 'visible-class'
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
    this.setState({
      newActivityTitle: e.target.value
    })
  }

  handleNewActivityTime = e => {
    this.setState({
      newActivityTime: e.target.value
    })
  }

  addActivityClick = (name, time) => {
    var timeToNumber = Number(time)
    this.setState({
      activities:  [...this.state.activities, {name: name, time: timeToNumber}],
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
    const { activities, travelTime, amountOfSleepWanted, whatTimeYouNeedToBeSomewhere} = this.state
    var activitiesTotalTime = activities.map( activity => activity.time ).reduce((accum, currentVal) => accum + currentVal, 0)

    var activitiesAndTravelTime = activitiesTotalTime + travelTime

    var timeYouHaveToBeAtAPlace = moment().set({'hour': 0, 'minute': whatTimeYouNeedToBeSomewhere, 'second': 0})
    console.log(timeYouHaveToBeAtAPlace.format('LT'))

    var wakeUpTime = timeYouHaveToBeAtAPlace.subtract(activitiesAndTravelTime, 'minutes')
    console.log(wakeUpTime.format('LT'))

    var gotToBedTime = wakeUpTime.subtract(amountOfSleepWanted, 'minute')
    this.setState({
      timeForBed: gotToBedTime.format('LT')
    })
    console.log(gotToBedTime.format('LT'))
  }


  handleSleepHrsChange = e => {
    let sleepHrsToNumber = Number(e.target.value)
    this.setState({
      sleepHrs: sleepHrsToNumber
    })
  }

  handleSleepMinsChange = e => {
    let sleepMinsToNumber = Number(e.target.value)
    this.setState({
      sleepMins: sleepMinsToNumber
    })
  }

  handleAmountOfSleep = () => {
    const {sleepHrs, sleepMins} = this.state
    let hrsAndMinsCombined = (sleepHrs * 60) + sleepMins
    this.setState({
      amountOfSleepWanted: hrsAndMinsCombined,
      hideAndDisplaySleepAmount: 'visible-class'
    })
  }

  handleFinalDestinationHrsChange = e => {
    let finalDestinationHrsToNumber = Number(e.target.value)
    this.setState({
      finalDestinationHrs: finalDestinationHrsToNumber
    })
  }

  handleFinalDestinationMinsChange = e => {
    let finalDestinationMinsToNumber = Number(e.target.value)
    this.setState({
      finalDestinationMins: finalDestinationMinsToNumber
    })
  }

  handleArrivalTime = () => {
    console.log('arrival time button working')
    const {finalDestinationHrs, finalDestinationMins} = this.state
    let finalDestHrsAndMinsCombined = (finalDestinationHrs * 60) + finalDestinationMins

    var test = moment().set({'hour': finalDestinationHrs, 'minute': finalDestinationMins, 'second': 0})
    console.log(test.format('LT'))

    this.setState({
      whatTimeYouNeedToBeSomewhere: finalDestHrsAndMinsCombined,
      hideAndDisplayFinalDestTime: 'visible-class',
      whatTimeYouNeedToBeSomewhereDisplay: test.format('LT')
    })
  }

  render() {
    const { activities, hideAndDisplayStartAndEndLocation, sleepHrs, sleepMins, hideAndDisplaySleepAmount, finalDestinationHrs, finalDestinationMins, hideAndDisplayFinalDestTime, timeForBed, whatTimeYouNeedToBeSomewhereDisplay } = this.state

    return (
      <div className="App">
        <h1><Clock /></h1>
        <h1>What time to go to Bed?</h1>
        <h2>{timeForBed}</h2>
        <div className={hideAndDisplayStartAndEndLocation}>Your start location: {this.state.visibleStartLocation}</div>
        <div className={hideAndDisplayStartAndEndLocation}>Your final destination: {this.state.visibleFinalDestination}</div>

        <div className={hideAndDisplaySleepAmount}>Amount of sleep you want: {sleepHrs} hrs and {sleepMins} mins </div>

        <div className={hideAndDisplayFinalDestTime}>Time you need to be somewhere: {whatTimeYouNeedToBeSomewhereDisplay}</div>
        
          { activities.map(activity => (
            <Activities data={activity} key={activity.name} />
          ))
          }
          <hr/>
          <div>How much sleep do you want tonight?</div>
          <div><input onChange={this.handleSleepHrsChange} min="0" type="number"/>hours</div>
          <div><input onChange={this.handleSleepMinsChange} min="0" type="number"/>minutes</div>
          <button onClick={this.handleAmountOfSleep}>add amount of sleep</button>
          <hr/>

          <div>Your starting location</div>
          <input onChange={this.handleStartLocationChange}  type="text"/>
          <div>Your final destination</div>
          <input onChange={this.handleFinalDestinationChange} type="text"/>
          <div><button onClick={this.handleAddTravelDestination}>Add travel destination</button></div>

          <hr/> 
          <div>What time do you need to be at your final destination?</div>
          <div>hours<input onChange={this.handleFinalDestinationHrsChange} type="text"/> : minutes<input onChange={this.handleFinalDestinationMinsChange} type="text"/></div>
          <button onClick={this.handleArrivalTime}>add time</button>
           

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
