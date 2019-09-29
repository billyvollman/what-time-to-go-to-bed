import React from 'react'
import './SelectBox.css'


export default class SelectBox extends React.Component {
    state = {
        ...this.props,
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0],
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }

    selectItem = (item) => this.setState({
        selectedItem: item,
        showItems: false,
    })

    render() {
        return <div>
            <div className='select-box--box'
                style={{width: this.state.width || 180}}
            >
                <div
                    className='select-box--container'
                >
                    <div className='select-box--selected-item'>
                        {this.state.selectedItem.value}
                    </div>
                    <div className="select-box--arrow" onClick={this.dropDown}>
                    
                        <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}>
                        </span>
                    </div>
                    <div style={{display: this.state.showItems ? 'block' : 'none'}}
                        className="select-box--items"
                    >
                        {
                            this.state.items.map( item => <div
                                key={item.id}
                                onClick={() => this.selectItem(item)}
                                className={this.state.selectedItem === item ? 'selected' : ''}
                            >
                                { item.value }
                            </div> )
                        }
                    </div>
                </div>
            </div>
            <input
                type="hidden"
                value={this.state.selectedItem.id}
                names={this.state.name}
            />
        </div>
    }
}


{/* <SelectBox onChange={(values) => this.setValues(values)}
                    width={80}
                    name="time_id"
                    items={[
                      {value: '00', id: 0},
                      {value: '01', id: 1},
                      {value: '02', id: 2},
                      {value: '03', id: 3},
                      {value: '04', id: 4},
                      {value: '05', id: 5},
                      {value: '06', id: 6},
                      {value: '07', id: 7},
                      {value: '08', id: 8},
                      {value: '09', id: 9},
                      {value: '10', id: 10},
                      {value: '11', id: 11},
                    ]}
                    
                  /> */}