import React, { Component } from 'react'
import Clients from '../components/Clients'
import Slider from '../components/slider'
import Us from '../components/Us'
import Why from '../components/Why'

export default class home extends Component {
  render() {
    return (
        <div>
            <Slider/>
            <Why/>
            <Us />
            <Clients/>
        </div>
    )
  }
}
