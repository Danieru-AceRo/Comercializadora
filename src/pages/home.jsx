import React, { Component } from 'react'
import Clients from '../components/Clients'
import Slider from '../components/slider'
import Why from '../components/Why'

export default class home extends Component {
  render() {
    return (
        <div>
            <Slider/>
            <Why/>
            <Clients/>
        </div>
    )
  }
}
