import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HomePage from '../../Pages/HomePage/HomePage'

function Layout({Homepage}) {
  return (
    <div>
        <Header/>
        <HomePage/>
        <Footer/>
    </div>
  )
}

export default Layout