import React, { Component } from 'react'

export default class Room extends Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div>
                {this.state.i}
            </div>
        )
    }
}
