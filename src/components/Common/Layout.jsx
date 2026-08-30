import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ HomePage }) {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default Layout
