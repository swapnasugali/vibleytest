import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ HomePage }) {
  return (
    <div className="min-h-screen">

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 z-50 w-full">
        <Header />
      </div>

      {/* Page Content */}
      <main className="pt-[80px]">
        <HomePage />
      </main>

      <Footer />

    </div>
  )
}

export default Layout