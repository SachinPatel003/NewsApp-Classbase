import React, { Component } from 'react'
import ABC from './giff.gif'

export default class Loading extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={ABC} alt="" />
            </div>
        )
    }
}
