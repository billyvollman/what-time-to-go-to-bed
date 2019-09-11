import React from 'react'
import moment from 'moment'

export default class Clock extends React.Component {

    state = {
        currentTime: this.timeNow
      }

    timeNow = () => {
      var hrs = moment().hour()
      var mins = moment().minute()
      var secs = moment().seconds()
      console.log(`${hrs}:${mins}:${secs}`)
      var time = `${hrs}:${mins}:${secs}`
      this.setState({
        currentTime: time
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
            } else if (hrs < 10 && mins < 10) {
                var time = `0${hrs}:0${mins}:${secs}`
            } else if (hrs < 10 && secs < 10) {
                var time = `0${hrs}:${mins}:0${secs}`
            } else if (hrs < 10) {
                var time = `0${hrs}:${mins}:${secs}`
            } else if (mins < 10 && secs < 10 ) {
                var time = `${hrs}:0${mins}:0${secs}`
            } else if (mins < 10 ) {
                var time = `${hrs}:0${mins}:${secs}`
            } else if (secs < 10 ) {
                var time = `${hrs}:${mins}:0${secs}`
            }else {
                var time = `${hrs}:${mins}:${secs}`
            }
            this.setState({
                currentTime: time
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }

      render() {
        const { currentTime } = this.state

        return(
            <section>
                <h5>{currentTime}</h5>
            </section>
        )
      }
}

