import React from 'react'
import Button from 'react-bootstrap/Button'
import './AddActivities.css'

export default class AddActivities extends React.Component {

    state = {
        showAddActivities: false,
        name: '',
        time: '',
      }

    handleNewActivityTitle = e => {
        this.setState({
          name: e.target.value
        })
    }
    
    handleNewActivityTime = e => {
        this.setState({
            time: e.target.value
        })
    }
    
    displayAddActivityInputClick = e => {
        this.setState({
            showAddActivities: true
        })
    }

    hideForm = () => {
        this.setState({
            showAddActivities: false
        })
    }

    handleAdd = () => {
        this.inputActivityTitle.value = ""
        this.inputActivityTime.value = ""
        const { name, time } = this.state
        this.props.onAdd(name, time)
        this.hideForm()
    }

    handleNo = () => {
        this.props.onNo()
    }

    render() {

        const { showAddActivities } = this.state

        if (showAddActivities === true) {
            return (
                <section className="add-activity-section">
                    <div>Title</div>
                    <input className="add-activity-first-input" onChange={this.handleNewActivityTitle} ref={el => this.inputActivityTitle = el} type="text"/>
                    <div>Time (in minutes)</div>
                    <input className="add-activity-last-input" onChange={this.handleNewActivityTime} ref={el => this.inputActivityTime = el} type="number"/>
                    <div><Button onClick={this.handleAdd}>Add Activity</Button></div>
                </section>
            )
        } else {
            return (
                <section>
                    <Button onClick={this.displayAddActivityInputClick}>Yes</Button>
                    <Button onClick={this.handleNo}>No</Button>
                </section>
            )
        }

    }

    


}