import React from 'react'

export default function Activities(props) {
    return (
            <div>{props.data.name} {props.data.time}</div>
    )
}