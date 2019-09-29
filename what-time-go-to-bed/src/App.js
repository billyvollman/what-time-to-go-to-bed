import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import logo from './logo.svg';
// import './skeleton.css';
// import './normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import './App.css';
// import axios from 'axios';
import Activities from './Activities';
import AddActivities from './AddActivities';
import Clock from './Clock';
import moment from 'moment';


const initialState = {
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
  hideAndDisplayBedTime: 'hidden-class',
  hideAndDisplayWakeUpTime: 'hidden-class',
  timeForBed: '',
  timeToWakeUp: '',
  currentTime: [],
  hideAndDisplaySectionContainer: 'section-container',
  amountSleepSection: 'section-container-last',
  travelSomwhereTomorrowQuestion: 'hidden-class',
  whereNeedToBeSection: 'hidden-class',
  timeNeedToBeAtFinalDest: 'hidden-class',
  activitiesSection: 'hidden-class',
  moreActivitiesSection: 'hidden-class',
  calculateBedTimeSection: 'hidden-class',
  resetPageBtnSection: 'hidden-class',
  selectedHrsTime: 1,
  selectedMinsTime: 0,
  selectedMeridiemTime: 'AM',
  minutes: [...Array(60).keys()],
  hours: [...Array(13).keys()].slice(1),
}

class MapContainer extends React.Component {
  state = initialState;

  handleAddTravelDestination = () => {
    const {startLocation, finalDestination} = this.state

    // console.log(startLocation)
    // console.log(finalDestination)
    const { google } = this.props
    const service = new google.maps.DistanceMatrixService()
    service.getDistanceMatrix(
      {
        origins: [startLocation],
        destinations: [finalDestination],
        travelMode: 'DRIVING',
        region: 'AU'
      },
      (response, status) => {
        // console.log('response', response)
        // console.log('status', status)
        // debugger
        if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
          // console.log('error')
          this.handleTravelError()
        } else if (response.rows[0].elements[0].duration.text.split(' ').length > 2) {
          var travelDuration = (Number(response.rows[0].elements[0].duration.text.split(' ')[0]) * 60) + Number(response.rows[0].elements[0].duration.text.split(' ')[2])
        } else if (response.rows[0].elements[0].status !== "ZERO_RESULTS") {
          travelDuration = Number(response.rows[0].elements[0].duration.text.split(' ')[0])
        } else {
          // console.log('error')
        }
        
        this.setState({
          travelTime: travelDuration,
          visibleStartLocation: startLocation,
          visibleFinalDestination: finalDestination,
          hideAndDisplayStartAndEndLocation: 'visible-class',
          whereNeedToBeSection: 'hidden-class',
          timeNeedToBeAtFinalDest: 'section-container-last'
        })
      }
    )
    this.inputStartLocation.value = ""
    this.inputFinalDest.value = ""
  }

  handleTravelError = () => {
    console.log('handle travel error')
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
    // this.inputActivityTitle.value = ""
    // this.inputActivityTime.value = ""
    var timeToNumber = Number(time)
    this.setState({
      activities:  [...this.state.activities, {name: name, time: timeToNumber}],
      activitiesSection: 'hidden-class',
      moreActivitiesSection: 'section-container-last'
    })
  }

  noActivityClick = () => {
    this.setState({
      activitiesSection: 'hidden-class',
      moreActivitiesSection: 'hidden-class',
      calculateBedTimeSection: 'section-container-last'
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
    const { activities, travelTime, amountOfSleepWanted, whatTimeYouNeedToBeSomewhere, hideAndDisplaySectionContainer} = this.state
    var activitiesTotalTime = activities.map( activity => activity.time ).reduce((accum, currentVal) => accum + currentVal, 0)

    var activitiesAndTravelTime = activitiesTotalTime + travelTime

    var timeYouHaveToBeAtAPlace = moment().set({'hour': 0, 'minute': whatTimeYouNeedToBeSomewhere, 'second': 0})
    // console.log(timeYouHaveToBeAtAPlace.format('LT'))

    var wakeUpTime = timeYouHaveToBeAtAPlace.subtract(activitiesAndTravelTime, 'minutes')
    // console.log(wakeUpTime.format('LT'))
    var outOfBedTime = wakeUpTime.format('LT')

    var gotToBedTime = wakeUpTime.subtract(amountOfSleepWanted, 'minute')
    
    this.setState({
      timeForBed: gotToBedTime.format('LT'),
      timeToWakeUp: outOfBedTime,
      hideAndDisplaySectionContainer: 'hidden-class',
      hideAndDisplayBedTime: 'time-need-be-in-bed',
      hideAndDisplayWakeUpTime: 'time-need-wake-up',
      calculateBedTimeSection: 'hidden-class',
      resetPageBtnSection: 'section-container-last'
    })
    // console.log(gotToBedTime.format('LT'))

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
    this.inputHrs.value = ""
    this.inputMins.value = ""
    const {sleepHrs, sleepMins} = this.state
    let hrsAndMinsCombined = (sleepHrs * 60) + sleepMins
    this.setState({
      amountOfSleepWanted: hrsAndMinsCombined,
      hideAndDisplaySleepAmount: 'visible-class',
      amountSleepSection: 'hidden-class',
      whereNeedToBeSection: 'section-container-last',
      // travelSomwhereTomorrowQuestion: 'section-container-last'
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
    this.selectHrs.value = 1
    this.selectMins.value = 0
    this.selectMerdiem.value = 'AM'
    const {finalDestinationHrs, finalDestinationMins, selectedHrsTime, selectedMinsTime, selectedMeridiemTime} = this.state

    if (selectedMeridiemTime === 'AM' && selectedHrsTime === 12) {
      let hrs = selectedHrsTime - 12
      let mins = selectedMinsTime
      this.arrivalTime(hrs, mins)
    } else if (selectedMeridiemTime === 'PM' && selectedHrsTime !== 12) {
      let hrs = selectedHrsTime + 12
      let mins = selectedMinsTime
      this.arrivalTime(hrs, mins)
    } else {
      let hrs = selectedHrsTime
      let mins = selectedMinsTime
      this.arrivalTime(hrs, mins)
      }
  }

  arrivalTime = (hrs, mins) => {
      let finalDestHrsAndMinsCombined = (hrs * 60) + mins
      var timePrettyFormat = moment().set({'hour': hrs, 'minute': mins, 'second': 0})

      this.setState({
        whatTimeYouNeedToBeSomewhere: finalDestHrsAndMinsCombined,
        hideAndDisplayFinalDestTime: 'visible-class',
        whatTimeYouNeedToBeSomewhereDisplay: timePrettyFormat.format('LT'),
        timeNeedToBeAtFinalDest: 'hidden-class',
        activitiesSection: 'section-container-last'
      })
  }

  handleHrsTime = e => {
    let selectedHr = Number(e.target.value)
    this.setState({
      selectedHrsTime: selectedHr
    })
  }

  handleMinsTime = e => {
    let selectedMins = Number(e.target.value)
    this.setState({
      selectedMinsTime: selectedMins
    })
  }

  handleMeridiem = e => {
    let selectedMeridiem = e.target.value
    this.setState({
      selectedMeridiemTime: selectedMeridiem
    })
  }

  // handleYesTravel = () => {
  //   this.setState({
  //     travelSomwhereTomorrowQuestion: 'hidden-class',
  //     whereNeedToBeSection: 'section-container-last',
  //   })
  // }

  // handleNoTravel = () => {
  //   this.setState({
  //     travelSomwhereTomorrowQuestion: 'hidden-class',
  //     activitiesSection: 'section-container-last',
  //   })
  // }

  resetPage = () => {
    this.setState(initialState)
    // window.location.reload();
  }

  render() {
    const { activities, hideAndDisplayStartAndEndLocation, sleepHrs, sleepMins, hideAndDisplaySleepAmount, hideAndDisplayFinalDestTime, hideAndDisplayBedTime, hideAndDisplayWakeUpTime, timeForBed, timeToWakeUp, whatTimeYouNeedToBeSomewhereDisplay, amountSleepSection, whereNeedToBeSection, timeNeedToBeAtFinalDest, activitiesSection, moreActivitiesSection, calculateBedTimeSection, resetPageBtnSection, travelSomwhereTomorrowQuestion} = this.state

    return (
      <div className="App">
        <h1><Clock /></h1>
        <div className="main-interactive-section">
          <div className="section-container">
            <div className="time-for-bed">
              <h1>What time to go to Bed?</h1>
              <h2 className={hideAndDisplayBedTime}>You need to go to bed at {timeForBed}</h2>
              <h2 className={hideAndDisplayWakeUpTime}>And wake up at {timeToWakeUp}</h2>

              <div className={hideAndDisplaySleepAmount}>Amount of sleep you want: {sleepHrs} hrs and {sleepMins} mins </div>

              <div className={hideAndDisplayStartAndEndLocation}>Your start location: {this.state.visibleStartLocation}</div>
              <div className={hideAndDisplayStartAndEndLocation}>Your final destination: {this.state.visibleFinalDestination}</div>

              <div className={hideAndDisplayFinalDestTime}>Time you need to be somewhere: {whatTimeYouNeedToBeSomewhereDisplay}</div>
              
                {activities.map(activity => (
                  <Activities data={activity} key={activities.indexOf(activity)} />
                ))
                }
              
            </div>
          </div>
          
            
          <div className={amountSleepSection}>
            <div className="how-much-sleep-want">
              <div>How much sleep do you want tonight?</div>

              <div><input onChange={this.handleSleepHrsChange} ref={el => this.inputHrs = el} min="0" type="number"/>hours</div>
              <div><input onChange={this.handleSleepMinsChange} ref={el => this.inputMins = el} min="0" type="number"/>minutes</div>
            </div>
              <Button onClick={this.handleAmountOfSleep}>Add amount of sleep</Button>
          </div>

          {/* <div className={travelSomwhereTomorrowQuestion}>
              <div className="travel-somwhere-tomorrow-question">Are you traveling somwhere tomorrow?</div>
              <Button onClick={this.handleYesTravel}>Yes</Button>
              <Button onClick={this.handleNoTravel}>No</Button>
          </div> */}
            
            <div className={whereNeedToBeSection}>
              <div className="start-end-location">
              <div>Where do you need to be tomorrow?</div>
                <div className="start-location">
                  <div>Your starting location</div>
                  <input onChange={this.handleStartLocationChange} ref={el => this.inputStartLocation = el} placeholder="enter address or suburb" type="text"/>
                </div>
                <div className='final-dest'>
                  <div>Your final destination&nbsp;</div>
                  <input onChange={this.handleFinalDestinationChange} ref={el => this.inputFinalDest = el} placeholder="enter address or suburb" type="text"/>
                </div>
                <div><Button onClick={this.handleAddTravelDestination}>Add travel destination</Button></div>
              </div>
            </div>
            
            <div className={timeNeedToBeAtFinalDest}>
              <div className="time-at-final-dest">
                  <div className="time-at-final-dest-title">What time do you need to be at your final destination?</div>

                  <select onChange={this.handleHrsTime} ref={el => this.selectHrs = el}>
                    {this.state.hours.map(hour =>( 
                      <option key={hour} value={hour}>
                        {hour.toString().padStart(2,'0')}
                      </option>
                    ))}
                  </select>
                  <span> : </span>
                  <select onChange={this.handleMinsTime} ref={el => this.selectMins = el}>
                    {this.state.minutes.map(minute =>(
                      <option key={minute} value={minute}>
                        {minute.toString().padStart(2,'0')}
                      </option>
                    ))}
                  </select>

                  <select onChange={this.handleMeridiem} ref={el => this.selectMerdiem = el}>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                  <div>
                    <Button onClick={this.handleArrivalTime}>Add time</Button>
                  </div>
              </div>
            </div>
            
            <div className={activitiesSection}>
              <div className="add-activity-text">Will you be doing any activities in the morning?</div>
              <AddActivities  onAdd={this.addActivityClick} onNo={this.noActivityClick} />
            </div>

            <div className={moreActivitiesSection}>
              <div className="add-activity-text">Will you be doing any other activities in the morning?</div>
              <AddActivities  onAdd={this.addActivityClick} onNo={this.noActivityClick} />
            </div>
            
            <div className={calculateBedTimeSection}>
              <Button onClick={this.handleFigureoutTimeForBed}>Calculate Time for Bed?</Button>
            </div>
            <div className={resetPageBtnSection}>
              <Button onClick={this.resetPage}>Calculate again</Button>
            </div>
        </div>
      </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCha11ARLYwPGdsg7_RCac7mcfv9a8GwRM'
})(MapContainer)
