import React, { Component } from 'react'
import { throws } from 'assert';

export default class ClassComponent extends Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}