import React from 'react'

export default class AddActivities extends React.Component {

    state = {
        showAddActivities: false,
        name: '',
        time: '',
      }

    handleNewActivityTitle = e => {
        console.log(e.target.value)
        this.setState({
          name: e.target.value
        })
    }
    
    handleNewActivityTime = e => {
        console.log(e.target.value)
        this.setState({
            time: e.target.value
        })
    }
    
    displayAddActivityInputClick = e => {
        console.log('working')
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
        const { name, time } = this.state
        this.props.onAdd(name, time)
        this.hideForm()
    }

    render() {

        const { showAddActivities } = this.state

        if (showAddActivities === true) {
            return (
                <section>
                    <div>Title</div>
                    <input onChange={this.handleNewActivityTitle}  type="text"/>
                    <div>Time (in minutes)</div>
                    <input onChange={this.handleNewActivityTime} type="number"/>
                    <div><button onClick={this.handleAdd}>Add Activity</button></div>
                </section>
            )
        } else {
            return (
                <section>
                    <button onClick={this.displayAddActivityInputClick}>Add an activity</button>
                </section>
            )
        }

    }

    


}