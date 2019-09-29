import React from 'react'
import moment from 'moment'
import './Clock.css'

export default class Clock extends React.Component {

    state = {
        currentDay: moment().format("dd"),
        currentTime: this.timeNow,
        currentHrs: this.timeNow,
        currentMins: this.timeNow,
        currentSecs: this.timeNow
      }

    timeNow = () => {
      var hrs = moment().hour()
      var mins = moment().minute()
      var secs = moment().seconds()
      var time = `${hrs}:${mins}:${secs}`
      var timeHrs = `${hrs}`
      var timeMins = `${mins}`
      var timeSecs = `${secs}`
      this.setState({
        currentTime: time,
        currentHrs: timeHrs,
        currentMins: timeMins,
        currentSecs: timeSecs
      })

    }

    componentDidMount() { // create the interval once component is mounted
        this.update = setInterval(() => {
            var hrs = moment().hour()
            var mins = moment().minute()
            var secs = moment().seconds()
            var time = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`
            var timeHrs = hrs.toString().padStart(2,'0')
            var timeMins = mins.toString().padStart(2,'0')
            var timeSecs = secs.toString().padStart(2,'0')
            
            this.setState({
                currentTime: time,
                currentHrs: timeHrs,
                currentMins: timeMins,
                currentSecs: timeSecs
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }

      render() {
        const { currentDay, currentHrs, currentMins, currentSecs } = this.state

        return(
            <section>
                {/* <h5>{currentTime}</h5> */}

                <div className="clock-container">
                    
                <div className="clock-col">
                    <p className="clock-day clock-timer"> {currentDay}
                    </p>
                    <p className="clock-label">
                    Day
                    </p>
                </div>
                <div className="clock-col">
                    <p className="clock-hours clock-timer"> {currentHrs}
                    </p>
                    <p className="clock-label">
                    Hours
                    </p>
                </div>
                <div className="clock-col">
                    <p className="clock-minutes clock-timer"> {currentMins}
                    </p>
                    <p className="clock-label">
                    Minutes
                    </p>
                </div>
                <div className="clock-col">
                    <p className="clock-seconds clock-timer"> {currentSecs}
                    </p>
                    <p className="clock-label">
                    Seconds
                    </p>
                </div>
                </div>
            </section>
        )
      }
}

