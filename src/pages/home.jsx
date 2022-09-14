import React, { Component } from 'react'
import Clients from '../components/Clients'
import Slider from '../components/slider'
import Us from '../components/Us'
import Why from '../components/Why'
import HomeProducts from '../components/HomeProducts'

export default class home extends Component {
  render() {
    return (
        <div>
            <Slider/>
            <HomeProducts />
            <Why/>
            <Us />
            <Clients/>
        </div>
    )
  }
}
