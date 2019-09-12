import React from 'react'
import moment from 'moment'
import './Clock.css'

export default class Clock extends React.Component {

    state = {
        currentTime: this.timeNow,
        currentHrs: this.timeNow,
        currentMins: this.timeNow,
        currentSecs: this.timeNow
      }

    timeNow = () => {
      var hrs = moment().hour()
      var mins = moment().minute()
      var secs = moment().seconds()
      console.log(`${hrs}:${mins}:${secs}`)
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
            // debugger
            if (hrs < 10 && mins < 10 && secs < 10) {
                var time = `0${hrs}:0${mins}:0${secs}`
                var timeHrs = `0${hrs}`
                var timeMins = `0${mins}`
                var timeSecs = `0${secs}`
            } else if (hrs < 10 && mins < 10) {
                var time = `0${hrs}:0${mins}:${secs}`
                var timeHrs = `0${hrs}`
                var timeMins = `0${mins}`
                var timeSecs = `${secs}`
            } else if (hrs < 10 && secs < 10) {
                var time = `0${hrs}:${mins}:0${secs}`
                var timeHrs = `0${hrs}`
                var timeMins = `${mins}`
                var timeSecs = `0${secs}`
            } else if (hrs < 10) {
                var time = `0${hrs}:${mins}:${secs}`
                var timeHrs = `0${hrs}`
                var timeMins = `${mins}`
                var timeSecs = `${secs}`
            } else if (mins < 10 && secs < 10 ) {
                var time = `${hrs}:0${mins}:0${secs}`
                var timeHrs = `${hrs}`
                var timeMins = `0${mins}`
                var timeSecs = `0${secs}`
            } else if (mins < 10 ) {
                var time = `${hrs}:0${mins}:${secs}`
                var timeHrs = `${hrs}`
                var timeMins = `0${mins}`
                var timeSecs = `${secs}`
            } else if (secs < 10 ) {
                var time = `${hrs}:${mins}:0${secs}`
                var timeHrs = `${hrs}`
                var timeMins = `${mins}`
                var timeSecs = `0${secs}`
            }else {
                var time = `${hrs}:${mins}:${secs}`
                var timeHrs = `${hrs}`
                var timeMins = `${mins}`
                var timeSecs = `${secs}`
            }
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
        const { currentTime, currentHrs, currentMins, currentSecs } = this.state

        return(
            <section>
                <h5>{currentTime}</h5>

                <div className="clock-container">
                <div className="clock-col">
                    <p className="clock-day clock-timer">
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

