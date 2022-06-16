import React, { Children } from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div className='hero_area'>
      <Header/>
        { children }
      <Footer/>
    </div>
  )
}

export default Layout